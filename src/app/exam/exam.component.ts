import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { topics, Topic } from '../topics';
import { timer, Observable } from 'rxjs';
import { map, tap, timeInterval, take, share, startWith } from 'rxjs/operators';

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
  wordStatus: string;
  letters: string[];
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

  generateQuestion() {
    const possibleTopics = topics
      .filter(t => t.body && t.body.trim().length > 100 && t.body.indexOf('**') !== -1);
    const topic = possibleTopics[parseInt((possibleTopics.length * Math.random()).toString(), 10)];
    const words = topic.body.split(/([ ,.()*])/g).filter(w => w !== '');
    const possibleWords = words
      .map((w: string, i) => [w, i])

      // Word has to be marked with **Word**
      .filter(([w, i], ci, all) =>
        (<string>w).length >= 2 &&
        all[(<number>i) - 2] && all[(<number>i) + 2] &&
        all[(<number>i) - 1][0] === '*' &&
        all[(<number>i) - 2][0] === '*' &&
        all[(<number>i) + 1][0] === '*' &&
        all[(<number>i) + 2][0] === '*');

      // Only uppercase words.
      // .filter(([w, i]) => w[0].toLowerCase() !== w[0] && (<string>w).length > 3)

      // Word should not be in the title of the topic.
      // .filter(([w, i]) => topic.title.toLocaleLowerCase().indexOf((<string>w).toLocaleLowerCase()) === -1);

    const chosen = possibleWords[parseInt((Math.random() * possibleWords.length).toString(), 10)];
    words[chosen[1]] = (<string>chosen[0]).replace(/./g, '-');
    const textSnippetSize = 100;

    const { solutionPos, text } = words.reduce((res, current, i) => {
      if (i === chosen[1]) {
        res.solutionPos = res.text.length - 1;
      } else if (Math.abs(i - <number>chosen[1]) > textSnippetSize) {
        return res;
      }
      res.text += current;

      // Remove spaces at beginning of line.
      res.text = res.text.replace(/^ +/gm, '');
      return res;
    }, { text: '', solutionPos: -1 });

    this.question = {
      text,
      solutionPos,
      topic,
      solution: <string>chosen[0],
    };
  }

  letterClick(letter: string) {
    const solution = this.question.solution;
    const correctLetter = solution[this.wordStatus.length];
    if (correctLetter.toLowerCase() !== letter.toLowerCase()) {
      this.points -= 2;
    } else {
      this.points = this.points + 2 + parseInt((Math.max(this.points, 0) * .1).toString(), 10);
    }

    this.wordStatus += correctLetter;
    const txtParts = this.question.text.split('');
    txtParts[this.question.solutionPos + this.wordStatus.length] = correctLetter;
    this.question.text = txtParts.join('');

    if (this.wordStatus.toLocaleLowerCase() === this.question.solution.toLocaleLowerCase()) {
      this.nextWord();
    } else {
      this.setLetters();
    }
  }

  setLetters(): void {
    const letterCount = 3;

    // Get random, non-repeating letters.
    const letters = Array.from({ length: letterCount })
      .reduce<string[]>((all, el, i) => [
        ...all,
        nonUsedLetter(all),
      ], []);

    // Ensure the correct letter is included.
    const correctLetter = this.question.solution[this.wordStatus.length].toUpperCase();
    if (letters.indexOf(correctLetter) === -1) {
      letters[parseInt((Math.random() * letters.length).toString(), 10)] = correctLetter;
    }

    // Sort letters to get keyboard layout.
    this.letters = letters
      .sort((a, b) => allLetters.indexOf(a.toUpperCase()) - allLetters.indexOf(b.toUpperCase()));

    function nonUsedLetter(allInUse) {
      const letter = allLetters[parseInt((Math.random() * allLetters.length).toString(), 10)];
      if (allInUse.indexOf(letter) !== -1) {
        return nonUsedLetter(allInUse);
      }
      return letter;
    }
  }

  nextWord() {
    this.wordStatus = '';
    this.generateQuestion();
    this.setLetters();
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
  topic: Topic;
}
