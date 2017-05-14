import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {QuestionService} from 'app/question/question.service'
import {AppComponent} from 'app/app.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdIconModule, MdMenuModule ,MdInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {QuestionComponent} from './question/question/question.component';
import {MdSelectModule} from '@angular/material';

export const ROUTES_CONFIG = [
  {
    path: '', redirectTo: 'question', pathMatch: 'full'
  },
  {path: 'question', component: QuestionComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdSelectModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    RouterModule,
    RouterModule.forRoot(ROUTES_CONFIG),
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
