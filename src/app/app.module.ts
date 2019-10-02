import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { G20Component } from './g20/g20.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    G20Component,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
