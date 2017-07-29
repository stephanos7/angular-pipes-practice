import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateComponent } from './components/date/date.component';
import { UppercaseComponent } from './components/uppercase/uppercase.component';
import { FilterComponent } from './components/filter/filter.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { DecimalComponent } from './components/decimal/decimal.component';
import { SliceComponent } from './components/slice/slice.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    UppercaseComponent,
    FilterComponent,
    CurrencyComponent,
    DecimalComponent,
    SliceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
