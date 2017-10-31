import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { connectService } from '../services/app.service.testservice';

import { Response } from '@angular/http'

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css']
})
export class TestformComponent implements OnInit {
	testForm:FormGroup;
	email:string;
  data:any;
	
	constructor(private service:connectService) { 
	  this.testForm = new FormGroup({
		'email':new FormControl(),
		});
  	}

  ngOnInit() {
  }
		
  submitMethod(){
  	this.service.sendData(this.email).subscribe((res) => console.log(res));
    this.service.getData().subscribe(
        (response:Response) => this.data = response.json()
        );
  }
}
