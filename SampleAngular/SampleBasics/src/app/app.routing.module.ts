import { NgModule } from '@angular/core';

import { IncludeContactsComponent } from './include-contacts/include-contacts.component';
import { ShowContactsComponent } from './show-contacts/show-contacts.component';
import { ContactsDirective } from './directives/contacts.directive';

import { authGuard } from './guards/auth.guard';

import { Routes, RouterModule } from '@angular/router'

const routes:Routes = [
{	path:'', component:IncludeContactsComponent},
{	path:'contacts', component:ShowContactsComponent, canActivate:[authGuard], canActivateChild:[authGuard],
  children:[
    {path:':nameContact', component:ShowContactsComponent}
    ]
},
]

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})

export class appRouterModule{ }
