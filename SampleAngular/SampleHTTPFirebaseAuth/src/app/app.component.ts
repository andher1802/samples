import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(){

		firebase.initializeApp({
			apiKey: "AIzaSyBA6Z505TDA86qokMRF-CazbroaDqQPJ3A",
    		authDomain: "angulartest-6081e.firebaseapp.com"
		});
  }

}
