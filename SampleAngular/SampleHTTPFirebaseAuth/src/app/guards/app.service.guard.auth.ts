import { Injectable } from '@angular/core';
import {	CanActivate,
			ActivatedRouteSnapshot,
			RouterStateSnapshot,
			Router
		} from '@angular/router';
import { authService } from '../services/app.service.signin';

@Injectable()
export class authGuard implements CanActivate {
	constructor(private backendService:authService, private router:Router){}
	canActivate(router:ActivatedRouteSnapshot, state:RouterStateSnapshot){
		if (this.backendService.isAuthenticated()){
			return true;
		}
		else{
			this.router.navigate(['signin']);
			return false;
		}
	}
}