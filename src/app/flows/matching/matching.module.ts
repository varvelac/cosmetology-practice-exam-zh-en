import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatchingComponent } from './matching.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  declarations: [MatchingComponent], 
  exports:[MatchingComponent]
})
export class MatchingModule {}
