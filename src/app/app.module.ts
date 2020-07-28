import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AspireDatatableModule } from '@aspire.software/aspire-datatable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AspireDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
