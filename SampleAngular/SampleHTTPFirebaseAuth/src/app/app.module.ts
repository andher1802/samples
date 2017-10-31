import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent } from './app.component';
import { AddinfoComponent } from './addinfo/addinfo.component';
import { SignupComponent } from './signup/signup.component'

import { authService } from './services/app.service.signin';
import { addServices } from './services/app.service.addinfo';

import { authGuard } from './guards/app.service.guard.auth';

import { AppRoutingModule } from './app.routing.module';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    AddinfoComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    FormsModule,
    ReactiveFormsModule, 
    AppRoutingModule
  ],

  providers: [
  	addServices,
    authService,
    authGuard
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
