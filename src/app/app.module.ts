import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { NgzoneDemoComponent } from './ngzone-demo/ngzone-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { LinePracticeComponent } from './line-practice/line-practice.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    NgzoneDemoComponent,
    LinePracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
