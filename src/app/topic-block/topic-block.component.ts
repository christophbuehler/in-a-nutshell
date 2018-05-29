import { Component, OnInit, Input, HostBinding, HostListener, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

import { Topic } from '../topics';
import { ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-topic-block',
  templateUrl: './topic-block.component.html',
  animations: [
    trigger('popState', [
      state('true', style({
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
      })),
      transition('false => true', [
        style({
          position: 'absolute',
        }),
        animate('0.4s ease')
      ]),
    ])
  ],
  styleUrls: ['./topic-block.component.scss']
})
export class TopicBlockComponent implements OnInit {
  @Input() topic: Topic;
  @ViewChild('content', { read: ElementRef }) content;
  @HostListener('click', ['$event']) onClick(e) {
    if (this.show) return;
    this.show = true;
    const contentEl = this.content.nativeElement;
    const rootEl = this.elRef.nativeElement;
    contentEl.style.top = `${rootEl.offsetTop}px`;
    rootEl.classList.toggle('view', true);
    this.popState = true;
  }
  popState = false;

  private show = false;

  constructor(
    private elRef: ElementRef,
  ) { }

  close(ev: Event) {
    ev.stopPropagation();
    if (!this.show) return;
    this.show = false;
    const rootEl = this.elRef.nativeElement;
    rootEl.classList.toggle('view', false);
    this.popState = false;
  }

  ngOnInit() {
  }
}
