import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
