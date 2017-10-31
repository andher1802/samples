import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { IncludeContactsComponent } from './include-contacts/include-contacts.component';
import { ShowContactsComponent } from './show-contacts/show-contacts.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ContactsDirective } from './directives/contacts.directive';

import { contactServices } from './services/contacts.service';
import { logService } from './services/logs.service';
import { authenticationService } from './services/fakeServices/auth.service'

import { authGuard } from './guards/auth.guard';
import { testPipe } from './pipes/test.pipe';


import { appRouterModule } from './app.routing.module'

@NgModule({
  declarations: [
    AppComponent,
    IncludeContactsComponent,
    ShowContactsComponent,
    ContactsDirective,
    NavBarComponent,
    testPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouterModule
  ],
  providers: [ contactServices, logService, authenticationService, authGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
