import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddinfoComponent } from './addinfo/addinfo.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

import { authGuard } from './guards/app.service.guard.auth';

const appRoutes: Routes = [
  { 
  path: '', 
  component: AddinfoComponent,
  canActivate: [authGuard]
  },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', redirectTo: 'signin' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}