import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatRippleModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MarkdownModule, MarkdownService, MarkdownComponent } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { TopicBlockComponent } from './topic-block/topic-block.component';
import { ExamComponent } from './exam/exam.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicBlockComponent,
    ExamComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    BrowserModule,
    MatIconModule,
    FlexLayoutModule,
    MatRippleModule,
    MatButtonModule,
    MarkdownModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
