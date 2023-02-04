import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResultsRoutingModule } from './results-routing.module'; 

import { ResultsComponent } from './results.component'; 

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ResultsRoutingModule
  ],
  declarations: [ResultsComponent], 
  exports:[ResultsComponent]
})
export class ResultsModule {}
