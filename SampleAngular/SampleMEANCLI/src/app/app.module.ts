import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { connectService } from './services/app.service.testservice';

import { AppComponent } from './app.component';
import { TestformComponent } from './testform/testform.component';

@NgModule({
  declarations: [
    AppComponent,
    TestformComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule, 
    HttpModule
  ],
  providers: [ 
    connectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
