import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
	CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { authenticationService } from '../services/fakeServices/auth.service';

@Injectable()
export class authGuard implements CanActivate, CanActivateChild {
	constructor(
	private guardService:authenticationService,	
	private router:Router) { }
	canActivate(
		route:ActivatedRouteSnapshot,
		state:RouterStateSnapshot):
	Observable<boolean> | Promise<boolean> | boolean {
		return this.guardService.checkState().then(
				(authenticated:boolean) => {
					if(authenticated){
						return true;
					}
					else {
						this.router.navigate(['/']);
					}
				});
	}

	canActivateChild(
		route:ActivatedRouteSnapshot,
		state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
		return this.canActivate(route, state);
	}
}