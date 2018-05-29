import { Topic, topics } from './topics';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics: Topic[] = topics;
  mainTopics: Topic[];

  constructor() {
    this.mainTopics = topics
      .filter(topic => topic.path === '');
  }
}
