import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateComponent } from './components/date/date.component';
import { UppercaseComponent } from './components/uppercase/uppercase.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    UppercaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
