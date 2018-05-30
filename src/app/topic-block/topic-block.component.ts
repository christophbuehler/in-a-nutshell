import { Component, OnInit, Input, HostBinding, HostListener, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

import { Topic, subTopics} from '../topics';
import { ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

declare const topics: Topic[];

@Component({
  selector: 'app-topic-block',
  templateUrl: './topic-block.component.html',
  animations: [
    trigger('popState', [
      state('true', style({
        transform: 'translate(0, 0)',
        height: '100%',
      })),
      transition('false => true', [
        style({
          position: 'absolute',
        }),
        animate('.4s ease')
      ]),
    ])
  ],
  styleUrls: ['./topic-block.component.scss']
})
export class TopicBlockComponent implements OnInit {
  @Input() topic: Topic;
  @ViewChild('content', { read: ElementRef }) content;
  popState = false;
  topics: Topic[];

  toggle() {
    const rootEl = this.elRef.nativeElement;
    if (this.popState) {
      rootEl.classList.toggle('view', false);
      this.popState = false;
      return;
    }
    const contentEl = this.content.nativeElement;
    contentEl.style.transform = `translate(0, ${rootEl.offsetTop}px)`;
    rootEl.classList.toggle('view', true);
    this.popState = true;
  }

  constructor(
    private elRef: ElementRef,
  ) { }

  ngOnInit() {
    this.topics = subTopics(this.topic);
  }
}
