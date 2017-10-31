import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { authService } from '../services/app.service.signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
	signForm:FormGroup;
	username:string;
	password:string;

	constructor(private authService: authService) { }
	ngOnInit() {
		this.signForm = new FormGroup({
			'username':new FormControl(),
			'password':new FormControl()
		});
  	}

  	onSubmit(){
  		this.authService.authenticationAccess(this.username, this.password);
  		console.log(this.signForm, this.username, this.password);

  	}

}
