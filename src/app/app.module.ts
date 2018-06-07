import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule, PluginManager } from 'core'
import { Us33Module } from 'us33';
import { Us201Module } from 'us201';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule, 
    FormsModule,
    Us33Module,
    //Us201Module
  ],
  providers: [PluginManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
