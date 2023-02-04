import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionsRoutingModule } from './questions-routing.module';

import { QuestionsComponent } from './questions.component';
import { QuestionFormComponent } from '../question-form/question-form.component';
import { QuestionFormModule } from '../question-form/question-form.module';
import { ResultsModule } from '../results/results.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    QuestionsRoutingModule,
    QuestionFormModule,
    ResultsModule
  ],
  declarations: [QuestionsComponent], 
  exports:[QuestionsComponent]
})
export class QuestionsModule {}
