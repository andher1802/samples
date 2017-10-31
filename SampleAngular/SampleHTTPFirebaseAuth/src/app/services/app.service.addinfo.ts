import {Http} from '@angular/http'
import { Injectable } from '@angular/core';

@Injectable()
export class addServices{
	constructor(private http:Http){
	}

	addInfoServer(data:any[], token:string){
		return this.http.post('https://angulartest-6081e.firebaseio.com/data.json?auth='+token, data);
	}

	readInfoServer(token:string){
		return this.http.get('https://angulartest-6081e.firebaseio.com/data.json?auth='+token);
	}

}