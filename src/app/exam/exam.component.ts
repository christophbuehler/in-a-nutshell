import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Topic } from '../topics';
import { timer, Observable } from 'rxjs';
import { map, tap, timeInterval, take, share, startWith } from 'rxjs/operators';

declare const topics: Topic[];
const allLetters = 'QWERTZUIOPÜASDFGHJKLÖÄYXCVBNM-';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
  animations: [
    trigger('popState', [
      state('true', style({
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        width: '100%',
      })),
      transition('false => true', [
        style({
          position: 'absolute',
        }),
        animate('0.4s ease')
      ]),
    ])
  ],
})
export class ExamComponent implements OnInit {
  @ViewChild('content', { read: ElementRef }) content;
  popState = false;
  question: GappedTextExamQuestion;
  running = false;
  points: number;
  timer: Observable<any>;
  highscore: number;
  status: string;

  constructor(
    private elRef: ElementRef,
  ) { }

  ngOnInit() {
    this.loadScore();
  }

  loadScore() {
    this.highscore = parseInt(localStorage.getItem('highscore'), 10) || 0;
    this.status = <string>[
        [0, 'Freshman'],
        [600, 'A long Way to go'],
        [800, 'Klugscheisser'],
        [1200, 'Genie'],
        [2000, 'Savant'],
        [40000, 'Hacker'],
      ].find(v => v[0] >= this.highscore)[1];
  }


  getWordsOfTopic(topic: Topic): (string | number)[][] {
    const words = topic.body.split(/([ ,.()*])/g).filter(w => w !== '');
    return words
      .map((w: string, i) => [w, i]);
  }

  getBuzzWords(words: (string | number)[][]): (string | number)[][] {
    return words

      // Word has to be marked with **Word**
      .filter(([w, i], ci, all) =>
        (<string>w).length >= 2 &&
        all[(<number>i) - 2] && all[(<number>i) + 2] &&
        all[(<number>i) - 1][0] === '*' &&
        all[(<number>i) - 2][0] === '*' &&
        all[(<number>i) + 1][0] === '*' &&
        all[(<number>i) + 2][0] === '*');
  }

  getRandomTopic(minBodyLength: number, exclude: Topic = void 0): Topic {
    const possibleTopics = topics
      .filter(t => !exclude || t !== exclude)
      .filter(t => t.body && t.body.trim().length > minBodyLength && t.body.indexOf('**') !== -1);
    return possibleTopics[parseInt((possibleTopics.length * Math.random()).toString(), 10)];
  }

  getUniqueWords(words: (string | number)[][], count: number): (string | number)[][] {
    const uniqueWords = [];
    while (uniqueWords.length < count) {
      const index = parseInt((Math.random() * words.length).toString(), 10);
      const word = words[index];
      if (!uniqueWords.find(w => w[0] === word[0])) {
        uniqueWords.push(word);
      }
    }
    return uniqueWords;
  }

  generateQuestion() {
    const topic = this.getRandomTopic(100);
    const words = this.getWordsOfTopic(topic);
    const buzzWords = this.getBuzzWords(words);
    const chosen = this.getUniqueWords(buzzWords, 1)[0];
    
    words[chosen[1]] = ['XXXXXXXXX', chosen[1]];

    const text = this.getTextSnippet(words, <number>chosen[1], 50);

    const solution = <string>chosen[0];
    const optionTopic = this.getRandomTopic(100, topic);
    const optionWords = this.getBuzzWords(this.getWordsOfTopic(optionTopic));
    const options = <string[]>this.getUniqueWords(optionWords, 3).map(w => w[0]);
    options.push(solution);

    this.question = {
      text,
      topic,
      options,
      solutionPos: <number>chosen[1],
      solution,
    };
  }

  getTextSnippet(words: (string | number)[][], surroundingIndex: number, textSnippetSize: number): string {
    return words.reduce((res, current, i) => {
      if (Math.abs(i - surroundingIndex) > textSnippetSize) {
        return res;
      }

      // Remove spaces at beginning of line.
      return res = `${res}${current[0]}`.replace(/^ +/gm, '');
    }, '');
  }

  optionClick(option: string) {
    const solution = this.question.solution;
    const solutionPos = this.question.solutionPos;
    const words = this.getWordsOfTopic(this.question.topic);
    const text = this.getTextSnippet(words, solutionPos, 50);

    this.question = {
      ...this.question,
      text,
    };

    if (option.toLowerCase() !== option.toLowerCase()) {
      this.points -= 2;
    } else {
      this.points = this.points + 2 + parseInt((Math.max(this.points, 0) * .1).toString(), 10);
    }

    setTimeout(() => this.nextWord(), 1000);
  }

  nextWord() {
    this.generateQuestion();
  }

  start() {
    const duration = 60;
    this.points = 0;
    this.timer = timer(1000, 1000).pipe(
      take(duration),
      map(i => duration - i - 1),
      share(),
    );
    this.timer
      .subscribe(null, null, () => {
        this.running = false;
        if (this.points > this.highscore) {
          localStorage.setItem('highscore', this.points.toString());
          this.loadScore();
          alert('New highscore! You have earned the title of: ' + this.status);
        } else {
          alert('Your score: ' + this.points);
        }

        this.points = 0;
      });
    this.nextWord();
    this.running = true;
  }

  toggle() {
    const rootEl = this.elRef.nativeElement;
    if (this.running) {
      return false;
    }
    if (this.popState) {
      rootEl.classList.toggle('view', false);
      this.popState = false;
      return;
    }
    const contentEl = this.content.nativeElement;
    contentEl.style.top = `${rootEl.offsetTop}px`;
    rootEl.classList.toggle('view', true);
    this.popState = true;
  }

}

export interface GappedTextExamQuestion {
  text: string;
  solution: string;
  solutionPos: number;
  options: string[];
  topic: Topic;
}
