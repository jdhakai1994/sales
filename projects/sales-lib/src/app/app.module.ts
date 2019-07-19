import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SalesLibAppComponent } from './app.component';

@NgModule({
  declarations: [
    SalesLibAppComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    SalesLibAppComponent
  ],
  providers: [],
  bootstrap: [SalesLibAppComponent]
})
export class SalesLibAppModule { }
