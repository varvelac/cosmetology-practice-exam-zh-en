import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuestionFormRoutingModule } from './question-form-routing.module'; 

import { QuestionFormComponent } from './question-form.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuestionFormRoutingModule
  ],
  declarations: [QuestionFormComponent], 
  exports:[QuestionFormComponent]
})
export class QuestionFormModule {}
