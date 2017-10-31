import { Component, OnInit, OnDestroy } from '@angular/core';
import { contactServices } from '../services/contacts.service';
import { ActivatedRoute, Params } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-show-contacts',
  templateUrl: './show-contacts.component.html',
  styleUrls: ['./show-contacts.component.css']
})
export class ShowContactsComponent implements OnInit, OnDestroy {

	contacts:{firstName:string, lastName:string, cellPhone:string}[]=[];
	suscribeVariable:Subscription;

	constructor( private contactservice:contactServices,
				 private activeRoute:ActivatedRoute
		) { }

	ngOnInit() {
		this.contacts = this.contactservice.contacts;
		console.log(this.activeRoute.snapshot.params['nameContact']);

		this.suscribeVariable =
		this.activeRoute.params.subscribe(
			(params:Params) => {
				console.log(params['nameContact']);
			}
			//susbribe is triggered when occurs a change in params, it is used for dealing with 
			//asynchronous data
			);
	}

	ngOnDestroy(){
		this.suscribeVariable.unsubscribe();
	}

}
