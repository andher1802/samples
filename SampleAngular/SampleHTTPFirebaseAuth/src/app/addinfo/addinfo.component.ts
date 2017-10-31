import { Component, OnInit } from '@angular/core';
import { addServices } from '../services/app.service.addinfo'
import { authService } from '../services/app.service.signin';

import { Response } from '@angular/http'

@Component({
  selector: 'app-addinfo',
  templateUrl: './addinfo.component.html',
  styleUrls: ['./addinfo.component.css']
})

export class AddinfoComponent {
  constructor(private addInfo:addServices, private authService: authService){
  }
  tempName:string;
  name:{firstName:string}[]=[];
  token:string;

  onSave(){
	this.name.push({firstName:this.tempName});
    this.token = this.authService.getToken();
  	this.addInfo.addInfoServer(this.name, this.token).subscribe(
  		(res) => { console.log(res) },
  		(err) => { 
  			console.log(this.name);
  			console.log(err);
  			}
  		);
  }

  onGet(){
    this.token = this.authService.getToken();
    this.addInfo.readInfoServer(this.token).subscribe(
      (response:Response) => {
        const data = response.json();
        console.log(data); 
      },
      (err) => {
        console.log(err);
      }
      );
  }

  logOut(){
    this.authService.logOut();
  }

}