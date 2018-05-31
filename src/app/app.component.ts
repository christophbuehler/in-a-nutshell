import { Component } from '@angular/core';
import { TopicService, Topic } from './topic.service';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mainTopics: Observable<Topic[]>;

  constructor(
    topicService: TopicService,
  ) {
    this.mainTopics = topicService.topics.pipe(
      map(topics => topics.filter(t => t.path === '')),
    );
  }
}
