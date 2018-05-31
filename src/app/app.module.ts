import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatRippleModule, MatDialogModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MarkdownModule, MarkdownService, MarkdownComponent } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { TopicBlockComponent } from './topic-block/topic-block.component';
import { ExamComponent, ScoreDialogComponent } from './exam/exam.component';
import { TopicService } from './topic.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopicBlockComponent,
    ExamComponent,
    ScoreDialogComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    BrowserModule,
    MatIconModule,
    FlexLayoutModule,
    MatRippleModule,
    MatButtonModule,
    HttpClientModule,
    MarkdownModule.forRoot({}),
  ],
  entryComponents: [ScoreDialogComponent],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
