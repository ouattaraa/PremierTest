import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-gestion-etudiant';
  

  constructor(){

    var firebaseConfig = {
      apiKey: "AIzaSyCclWW_omfRZNvg-RPB-NnUGgvXgeaU7LA",
      authDomain: "manage-students-7900e.firebaseapp.com",
      databaseURL: "https://manage-students-7900e.firebaseio.com",
      projectId: "manage-students-7900e",
      storageBucket: "manage-students-7900e.appspot.com",
      messagingSenderId: "510658711941",
      appId: "1:510658711941:web:4d9c2ce47242e7b2e774ec",
      measurementId: "G-T85Y60YN3M"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

  }

}
