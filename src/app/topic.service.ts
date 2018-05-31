import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  topics: Observable<Topic[]>;

  constructor(
    private http: HttpClient,
  ) {
    this.topics = this.topicsSubject.asObservable();
    this.getAll();
  }

  private topicsSubject = new BehaviorSubject<Topic[]>([]);

  private getAll() {
    this.http.get('http://in-a-nutshell-api.norizon.li').pipe(
      map((data: any[]) => data.map(d => ({ id: d.id, ...JSON.parse(d.document) }))),
      tap(topics => this.topicsSubject.next(topics)),
    ).subscribe();
  }

  subTopics(topic: Topic) {
    const path = trimSlashes(`${topic.path}/${topic.title.toLowerCase().replace(/ /g, '-')}`);
    const filtered = this.topicsSubject.value
        .filter(t => t.path.replace(/^\/|\/$/g, '') === path);
    return filtered;
    function trimSlashes(str) {
        return str
            .replace(/\/\//g, '/')
            .replace(/^\/|\/$/g, '');
    }
  }

  childTopicCount(topic: Topic): number {
      return this.subTopics(topic)
          .reduce((count, t) => count + 1 + this.childTopicCount(t), 1);
  }
}

export interface Topic {
  id: number;
  title: string;
  path: string;
  body?: string;
}
