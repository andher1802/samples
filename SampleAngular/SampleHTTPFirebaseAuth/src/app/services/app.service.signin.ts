// apiKey: "AIzaSyBA6Z505TDA86qokMRF-CazbroaDqQPJ3A"
// authDomain: "angulartest-6081e.firebaseapp.com"


import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class authService {
	constructor(private router:Router){	}
	token:string;

	authentication(username:string, password:string){
		firebase.auth().createUserWithEmailAndPassword(username, password);
	}

	authenticationAccess(username:string, password:string){
	firebase.auth().signInWithEmailAndPassword(username, password);
	firebase.auth().currentUser.getToken().then(
			(token:string) => {
				this.token = token;
			});
	this.router.navigate(['']);
	}

	getToken(){
		firebase.auth().currentUser.getToken().then(
			(token:string) => {
				this.token = token;
			});
		return this.token
	}

	logOut(){
		firebase.auth().signOut();
		this.token = null;
		this.router.navigate(['/signin']);

	}

	isAuthenticated(){
		return this.token != null;
	}
}