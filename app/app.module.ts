// import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent }  from './app.component';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Http, Headers,  URLSearchParams} from '@angular/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ContactService } from './Service/ContactService';
import { AppComponent }  from './app.component';
import { AboutComponent } from './About/about.component';
import { ServicesComponent } from './Service/services.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,routes,HttpModule  ],
  declarations: [ AppComponent, AboutComponent, ServicesComponent],
  providers:[ContactService],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
