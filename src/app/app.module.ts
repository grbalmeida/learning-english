import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { PanelComponent } from './panel/panel.component';
import { AttemptsComponent } from './attempts/attempts.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PanelComponent,
    AttemptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
