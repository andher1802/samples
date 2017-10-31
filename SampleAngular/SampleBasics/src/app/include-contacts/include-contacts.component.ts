import { Component, OnInit } from '@angular/core';
import { contactServices } from '../services/contacts.service';
import { authenticationService } from '../services/fakeServices/auth.service'

@Component({
  selector: 'app-include-contacts',
  templateUrl: './include-contacts.component.html',
  styleUrls: ['./include-contacts.component.css']
})
export class IncludeContactsComponent implements OnInit {
	firstName:string;
	lastName:string;
	cellPhone:string;

  constructor(private contactservice:contactServices, private authservice:authenticationService) { }

  ngOnInit() { 
  }

  AddContact(event:Event){
  	console.log(event);
  	this.contactservice.AddContact(this.firstName,this.lastName,this.cellPhone);
  	this.firstName = '';
  	this.lastName = '';
  	this.cellPhone = '';  	
  }

  logIn(){
    this.authservice.logIn();
    this.authservice.checkState();
  }

  logOut(){
    this.authservice.logOut();
    this.authservice.checkState();
  }
}