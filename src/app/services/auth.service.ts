import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //ligne ajoutée
 isAuth:boolean;
  constructor(private router:Router) { }

  createNewStudent(firstName:string,lastName:string,birthDay:Date,placeBirth:string,level:string,email:string,password:string,motivation:string){
    return new Promise(
      (resolve,reject)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
          ()=>{
            resolve();

            
          },
          (error)=>{
            reject(error);
            
          }
        );
      }
    );
  }
  signInStudent(email:string,password:string){
    return new Promise(
      (resolve,reject)=>{
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          ()=>{
            resolve();
            //ligne ajoutée
            this.isAuth=true;
          },
          (error)=>{
            reject(error);
             //ligne ajoutée
            this.isAuth=false;
          }
        );
      }
    );
  }

  signOutStudent(){
    this.isAuth=false;
    firebase.auth().signOut();
    this.router.navigate(['/choice-connection']);
  }

}
