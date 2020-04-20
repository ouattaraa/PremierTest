import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient, private router: Router,private authService:AuthService) { }

  admin = [
    
    {
      firstName: 'Nydia',
      lastName: 'Saidani',
      status: 'Docteur Classe A',
      email: 'nydia@gmail.com',
      password: 'nydiasdn123'
    },
    { 
      firstName: 'DIHIA',
      lastName: 'Saidani',
      status: 'Docteur Classe A',
      email: 'dihia@gmail.com',
      password: '123456789'
    },
    {
      firstName: 'AMIDOU',
      lastName: 'OUATTARA',
      status: 'Docteur Classe A',
      email: 'amidouattara52@gmail.com',
      password: '12345678'
    }
    
  ];

  createNewAdmin(firstName: string, lastName: string, status: string, email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve(true);
            console.log("compte crée!");
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  saveAdmin() {
    this.httpClient.put('https://manage-students-7900e.firebaseio.com/Admin.json', this.admin).subscribe(
      () => {
        alert('L\'administrateur est ajouté avec succès');
      },
      (error) => {
        alert('Erreur : ' + error);
      }
    )
  }

  addAdmin(firstName: string, lastName: string, status: string, email: string, password: string) {
    const obAdmin = {
      firstName: '',
      lastName: '',
      status: '',
      email: '',
      password: ''
    }

    if (firstName === '' || lastName === '' || status === '' || email === '' || password === '') {
      alert("Erreur d'inscription de l'administrateur.");
    } else {
      this.getAdmin();
      obAdmin.firstName = firstName;
      obAdmin.lastName = lastName;
      obAdmin.status = status;
      obAdmin.email = email;
      obAdmin.password = password;
      this.admin.push(obAdmin);
      this.createNewAdmin(firstName,lastName, status,email,password);
      this.saveAdmin();
    }

  }
 

  isExist(email:string, password: string, status: string) {
    this.getAdmin();
   
    for ( var i=0;i < this.admin.length;i++) {
      if (this.admin[i].email === email && this.admin[i].password === password && this.admin[i].status === status) {
        return true;
        break;
      }
    }
    return false;
  }


  signInAdmin(email: string, password: string, status: string) {
    this.isExist(email,password,status);

    if (this.isExist(email, password, status) === true) {

      return new Promise(
        (resolve, reject) => {
          firebase.auth().signInWithEmailAndPassword(email, password).then(
            () => {
              this.authService.isAuth=true;
              resolve();
              this.router.navigate(['accueil-admin-view']);
            },
            (error) =>{
            }
          );
        }
      );
    }else{
      alert("L'émail :"+email +" ou password: "+password+" ou Status:"+status+" inseré n'appartient à aucun admin,Veuillez ,verifier vos coordonnées puis Valider.");
    }
  }


  getAdmin(){
    this.httpClient.get<any[]>('https://manage-students-7900e.firebaseio.com/Admin.json').subscribe(
     (reponse)=>{
       this.admin=reponse;
     },
     (error)=>{
       alert('Erreur : '+error);
     }
   )
 }

}