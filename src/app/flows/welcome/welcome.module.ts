import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WelcomeRoutingModule } from './welcome-routing.module'; 
import { WelcomeComponent } from './welcome.component'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    WelcomeRoutingModule,
    HttpClientModule
  ],
  declarations: [WelcomeComponent], 
  exports:[WelcomeComponent]
})
export class WelcomeModule {}
