import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Topic } from '../topics';
import { timer, Observable } from 'rxjs';
import { map, tap, timeInterval, take, share, startWith } from 'rxjs/operators';
import { query } from '@angular/animations';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Inject } from '@angular/core';
import { stagger } from '@angular/animations';

declare const topics: Topic[];
const allLetters = 'QWERTZUIOPÜASDFGHJKLÖÄYXCVBNM-';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* => *', [
        query(':enter', [
          style({
            transform: 'translate3d(0,32px,0)',
            opacity: 0,
          }),
          stagger('50ms', [
            animate('0.2s ease-in', style({
              transform: 'translate3d(0,0,0)',
              opacity: 1,
            })),
          ]),
        ], { optional: true }),
        query(':leave', [
          style({
            transform: 'translate3d(0,0,0)',
            opacity: 1,
          }),
          animate('0.2s ease-in', style({
            transform: 'translate3d(0,-32px,0)',
            opacity: 0,
          }))
        ], { optional: true }),
      ]),
    ]),
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
  highscore: number;
  status: string;
  showCorrect = false;
  questionCount: boolean[];
  currentQuestionNum: number;

  private questionCountNum = 8;

  constructor(
    private elRef: ElementRef,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.loadScore();
  }

  loadScore() {
    this.highscore = parseInt(localStorage.getItem('highscore'), 10) || 0;
    this.status = <string>[
      [0, 'Freshman'],
      [4, 'Ziemlich Dumm'],
      [6, 'A long Way to go'],
      [7, 'Average Joe'],
      [8, 'Klugscheisser'],
      [10, 'Genie'],
      [100000000, 'Hacker'],
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

  getUniqueWords(words: (string | number)[][], count: number, exceptions = []): (string | number)[][] {
    const uniqueWords = [];
    while (uniqueWords.length < count) {
      const index = parseInt((Math.random() * words.length).toString(), 10);
      const word = words[index];
      if (!uniqueWords.find(w => w[0] === word[0]) && exceptions.indexOf(word[0]) === -1) {
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

    words[chosen[1]] = ['<span class="answer-not-solved">xxx</span>', chosen[1]];

    const text = this.getTextSnippet(words, <number>chosen[1], 50);
    const solution = <string>chosen[0];
    const optionTopic = this.getRandomTopic(100, topic);
    const optionWords = this.getBuzzWords(this.getWordsOfTopic(optionTopic));
    const options = <string[]>this.getUniqueWords(optionWords, 3, [solution]).map(w => w[0]);

    options.splice(parseInt((Math.random() * (options.length + 1)).toString(), 10), 0, solution);

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
    if (this.showCorrect) {
      return;
    }

    const solution = this.question.solution;
    const solutionPos = this.question.solutionPos;
    const words = this.getWordsOfTopic(this.question.topic);
    words[solutionPos][0] = `<span class="answer-solved">${solution}</span>`;
    const text = this.getTextSnippet(words, solutionPos, 50);

    this.question = {
      ...this.question,
      text,
    };
    this.showCorrect = true;

    if (option.toLowerCase() !== solution.toLowerCase()) {
      this.questionCount[this.currentQuestionNum] = false;
    } else {
      this.questionCount[this.currentQuestionNum] = true;
      this.points += 1;
    }

    if (this.currentQuestionNum === this.questionCountNum - 1) {
      this.running = false;
      // if (this.points > this.highscore) {
        localStorage.setItem('highscore', this.points.toString());
        this.loadScore();
        this.dialog.open(ScoreDialogComponent, {
          width: '250px',
          data: {
            points: this.points,
            status: this.status,
          }
        });
        // alert('New highscore! You have earned the title of: ' + this.status);
      // } else {
        // alert('Your score: ' + this.points);
      // }
      this.points = 0;
    } else {
      setTimeout(() => this.question = {
        ...this.question,
        options: [],
      }, 1200);
      setTimeout(() => this.nextWord(), 1800);
    }
  }

  nextWord() {
    this.currentQuestionNum++;
    this.showCorrect = false;
    this.generateQuestion();
  }

  start() {
    const duration = 60;
    this.points = 0;
    this.questionCount = Array(this.questionCountNum).fill(void 0);
    this.currentQuestionNum = -1;
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

@Component({
  selector: 'app-score-dialog',
  template: `
    <h2>Your Score: {{data.points}}</h2>
    {{data.status}}
  `,
})
export class ScoreDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ScoreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}