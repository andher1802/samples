import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'


import { authService } from '../services/app.service.signin';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
  		this.authService.authentication(this.username, this.password);
  		console.log(this.signForm, this.username, this.password);

  	}

}
