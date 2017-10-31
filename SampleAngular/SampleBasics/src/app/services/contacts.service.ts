import { logService } from './logs.service';
import { Injectable } from '@angular/core';


@Injectable()
export class contactServices {
	constructor(private logservice: logService){

	}
contacts:{firstName:string, lastName:string, cellPhone:string}[]=[];

AddContact(firstname:string, lastname:string, cellphone:string){
	this.contacts.push({firstName:firstname, lastName:lastname, cellPhone:cellphone});
	this.logservice.logEvent();
}
}