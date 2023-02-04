import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { QuestionFormModule } from './flows/question-form/question-form.module';
import { QuestionsModule } from './flows/questions/questions.module';
import { ResultsModule } from './flows/results/results.module';
import { WelcomeComponent } from './flows/welcome/welcome.component';
import { WelcomeModule } from './flows/welcome/welcome.module';
import { MatchingModule } from './flows/matching/matching.module';
import { MatchingComponent } from './flows/matching/matching.component';
import { ImportVocabularyFormModule } from './flows/import-vocabulary-form/import-vocabulary-form.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, QuestionFormModule, QuestionsModule, ResultsModule, WelcomeModule, MatchingModule, ImportVocabularyFormModule
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
