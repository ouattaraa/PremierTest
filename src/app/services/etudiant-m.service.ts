import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()

@Injectable({
  providedIn: 'root'
})
export class EtudiantMService {

  constructor(private httpClient: HttpClient,
    private router: Router,
    private authService: AuthService) { }
  user = [

    /*  {
         id: 0,
         firstName: 'Orten',
         lastName: 'ggg',
         birthDay: '20/20/2020',
         placeBirth: 'Hawsdsfai',
         level: 'Licence 3',
         email: 'randy7@gmail.com',
         password: '12345678',
         motivation: 'Jadore coder en java',
         reponse: 'Accepté(e)'
       },
   
       {
         id: 1,
         firstName: 'Orten',
         lastName: 'Randy',
         birthDay: '20/20/2020',
         placeBirth: 'Hawai',
         level: 'Licence 3',
         email: 'randy74@gmail.com',
         password: '12345678',
         motivation: 'Jadore coder en angular',
         reponse: 'Refus'
       }
      */
  ];

  etudiantAccepte = [
  /* {
          id: 0,
          firstName: 'hhhh',
          lastName: 'SAIDANI',
          birthDay: '20/10/12/1999',
          placeBirth: 'Béjaia',
          level: 'Licence 3',
          email: 'dihia1@gmail.com',
          password: '12345678',
          motivation: 'Jadore coder en angular',
          reponse: 'Accepté(e)'
        },*/
        
  ];


  demandeInscrTraite = [];
  demandeNonTraite = [];

  initUser(firstName: string, lastName: string, birthDay: Date,
    placeBirth: string, level: string, email: string,
    password: string, motivation: string, reponse: string) {
    const obUser = {
      id: 0,
      firstName: '',
      lastName: '',
      birthDay: '',
      placeBirth: '',
      level: '',
      email: '',
      password: '',
      motivation: '',
      reponse: ''
    }
    this.getDemandeInsc();
    obUser.id = this.user[(this.user.length - 1)].id + 1;
    obUser.firstName = firstName;
    obUser.lastName = lastName;
    obUser.birthDay = birthDay + "";
    obUser.placeBirth = placeBirth;
    obUser.level = level;
    obUser.email = email;
    obUser.password = password;
    obUser.motivation = motivation;
    obUser.reponse = reponse;
    this.user.push(obUser);
    this.saveDemandeInscription();
  }


  saveDemandeT(firstName: string, lastName: string, birthDay: Date,
    placeBirth: string, level: string, email: string,
    password: string, motivation: string, reponse: string) {
    const obUser = {
      id: 0,
      firstName: '',
      lastName: '',
      birthDay: '',
      placeBirth: '',
      level: '',
      email: '',
      password: '',
      motivation: '',
      reponse: ''
    }
    this.getEtudiantAccepte();
    obUser.id = this.etudiantAccepte[(this.etudiantAccepte.length - 1)].id + 1;
    obUser.firstName = firstName;
    obUser.lastName = lastName;
    obUser.birthDay = birthDay + "";
    obUser.placeBirth = placeBirth;
    obUser.level = level;
    obUser.email = email;
    obUser.password = password;
    obUser.motivation = motivation;
    obUser.reponse = reponse;

    if (reponse === 'Accepté(e)') {
      this.authService.createNewStudent(firstName, lastName, birthDay,
        placeBirth, level, email,
        password, motivation);

      this.etudiantAccepte.push(obUser);
      this.saveEtudiantAccepte();
      this.demandeInscrTraite.push(obUser);
      this.saveDemandeInscriptionTraite();

      this.router.navigate(['/list-etudiant']);

    } else if (reponse === 'Refus') {
      this.demandeInscrTraite.push(obUser);
      this.saveDemandeInscriptionTraite();
    }


  }

//mthd pour modifier les informations etudiants.

modifyInfo(firstName: string, lastName: string, birthDay: Date,
  placeBirth: string, level: string, email: string,
  password: string, motivation: string, reponse: string) {
  const obUser = {
    id: 0,
    firstName: '',
    lastName: '',
    birthDay: '',
    placeBirth: '',
    level: '',
    email: '',
    password: '',
    motivation: '',
    reponse: ''
  }
  this.getEtudiantAccepte();
  obUser.id = this.etudiantAccepte[(this.etudiantAccepte.length - 1)].id + 1;
  obUser.firstName = firstName;
  obUser.lastName = lastName;
  obUser.birthDay = birthDay + "";
  obUser.placeBirth = placeBirth;
  obUser.level = level;
  obUser.email = email;
  obUser.password = password;
  obUser.motivation = motivation;
  obUser.reponse = reponse;
  this.etudiantAccepte.push(obUser);
  this.saveEtudiantAccepte();
}

//Mehode pour remove un etudiant dans etudiant accepté sans changement d'id

removeEtudiantM(id: number) {
  this.getEtudiantAccepte();
  let i = 0;
  while (i < this.etudiantAccepte.length) {
    if (id === this.etudiantAccepte[i].id) {
      const etudiantMj = this.etudiantAccepte;
      etudiantMj.splice(etudiantMj.indexOf(etudiantMj[i]), 1);
      this.httpClient.put('https://manage-students-7900e.firebaseio.com/EtudiantAccepte.json', etudiantMj).subscribe(
        () => {
          alert('Mise à jour effectuée');
        },
        (error) => {
          alert("Error suvernue :" + error);
        }
      );
      this.router.navigate(['/list-etudiant']);
      break;
    }
    i++;
  }
}
  saveDemandeInscription() {
    this.httpClient.put('https://manage-students-7900e.firebaseio.com/DemandeInscriptionUsers.json', this.user).subscribe(
      () => {
        console.log('User created successfuly');
      },
      (error) => {
        console.log('There is an error!' + error);
      }
    );
  }

  saveEtudiantAccepte() {
    this.httpClient.put('https://manage-students-7900e.firebaseio.com/EtudiantAccepte.json', this.etudiantAccepte).subscribe(
      () => {
        console.log('Etudiant enregistré avec succès');
      },
      (error) => {
        console.log('Erreur !!' + error);
      }
    );

  }

  getEtudiantAccepte() {
    this.httpClient.get<any[]>('https://manage-students-7900e.firebaseio.com/EtudiantAccepte.json').subscribe(
      (reponse) => {
        this.etudiantAccepte = reponse;
      },
      (error) => {
        alert('Erreur d\'actualisation' + error);
      }
    )
  }

  getReponse(id: number) {
    return this.user[id].reponse;
  }


  saveDemandeInscriptionTraite() {
    this.httpClient.put('https://manage-students-7900e.firebaseio.com/DemandeInscrTraite.json', this.demandeInscrTraite).subscribe(
      () => {
        console.log('La demande d\'inscription a ete bien traité')
      },
      (error) => {
        console.log('Erreur: ' + error);
      }
    );
  }


  acceptDemande(id: number) {
    this.user[id].reponse = "Accepté(e)";
  }


  rejectDemande(id: number) {
    this.user[id].reponse = "Refus";

  }



  removeEtudiant(id: number) {
    let i = 0;
    while (i < this.etudiantAccepte.length) {
      if (id === this.etudiantAccepte[i].id) {
        const etudiantMj = this.etudiantAccepte;
        etudiantMj.splice(etudiantMj.indexOf(etudiantMj[i]), 1);
        this.changeId();//on rajoute encore une meth pour resoudre le pb des id ou celle la v suffir?attend.oui.

        this.httpClient.put('https://manage-students-7900e.firebaseio.com/EtudiantAccepte.json', etudiantMj).subscribe(
          () => {
            alert('Mise à jour effectuée');
          },
          (error) => {
            alert("Error suvernue :" + error);
          }
        );
        this.router.navigate(['/list-etudiant']);
        break;
      }
      i++;
    }
  }



  getStudentById(id: number) {
    this.getEtudiantAccepte();
    const etudiant = this.etudiantAccepte.find(
      (et) => {
        return et.id === id;
      }
    );
    return etudiant;
  }

  getStudentByIdFirstName(s: string) {
    this.getEtudiantAccepte;
    const etudiant = this.etudiantAccepte.find(
      (et) => {
        return et.firstName === s ;
      }
    );
    return etudiant;
  }



  getDemandeInsc() {
    this.httpClient.get<any[]>('https://manage-students-7900e.firebaseio.com/DemandeInscriptionUsers.json').subscribe(
      (reponse) => {
        this.user = reponse;
      },
      (error) => {
        alert('Erreur! ' + error);
      }
    )
  }
  //Variables et mthd pour recuperation du mot de passe perdu !

  answer: boolean;
  password: string;
  firstName: string;
  lastName: string;
  reponse: string;

  emailExiste(email: string) {
    this.getEtudiantAccepte();
    for (var i = 0; i < this.etudiantAccepte.length; i++) {
      if (this.etudiantAccepte[i].email === email) {
        this.password = this.etudiantAccepte[i].password;
        this.firstName = this.etudiantAccepte[i].firstName;
        this.lastName = this.etudiantAccepte[i].lastName;
        return true;
        break;
      }
    }
   return false;
  }



  ///variables et methode pour verification de la reponse donnée:
  answerA: string;
  nom: string;
  prenom: string;
  niveau: string;
  test: boolean;
  userExistency(email: string, password: string) {
    this.getDemandeInsc();
    for (var i = 0; i < this.user.length; i++) {
      if (this.user[i].email === email && this.user[i].password === password) {
        this.test = true;
        this.nom = this.user[i].firstName;
        this.prenom = this.user[i].lastName;
        this.answerA = this.user[i].reponse;
        this.niveau = this.user[i].level;
        return true;
        break;
      }

    }
    return false;
  }

  changeId() {
    this.getEtudiantAccepte();
    for (var i = 0; i < this.etudiantAccepte.length; i++) {
      this.etudiantAccepte[i].id = i;
    }
    this.saveEtudiantAccepte();
  }
  

  //variables et methode pour sigle etudiant
  infoFirstName:string;
  infoLastName:string;
  infoBirthDay:string;
  infoPlaceBirth:string;
  infoLevel:string;
  infoEmail:string;
  infoPassword:string;
  infoMotivation:string;//comme ca dans .ts on va supprime l'etudiant ,oui.
  identifiant:number;

  getInformation(id:number) {
    this.getEtudiantAccepte();
    for (var i = 0; i < this.etudiantAccepte.length; i++) {
      if (this.etudiantAccepte[i].id === id) {
        this.identifiant=id;
        this.infoPassword = this.etudiantAccepte[i].password;
        this.infoFirstName = this.etudiantAccepte[i].firstName;
        this.infoLastName = this.etudiantAccepte[i].lastName;
        this.infoBirthDay=this.etudiantAccepte[i].birthDay;
        this.infoPlaceBirth=this.etudiantAccepte[i].placeBirth;
        this.infoLevel=this.etudiantAccepte[i].level;
        this.infoEmail=this.etudiantAccepte[i].email;
        this.infoMotivation=this.etudiantAccepte[i].motivation;
        return true;
        break;
      }
    }
    return false;
  }

//Méthode de verification de la presence (email,password ) dans la liste  des étudiants.

isStudent(email: string, password: string) {

  this.getEtudiantAccepte();

  for (var i = 0; i < this.etudiantAccepte.length; i++) {
    if (this.etudiantAccepte[i].email === email && this.etudiantAccepte[i].password === password) {
      return true;
      break;
    }

  }
  return false;
}
  



  /*
    changeDemanId() {
      this.getDemandeInsc();
      let i = 0;
      const dem = this.user;
      while (i < dem.length) {
        dem[i].id = i;
        this.httpClient.put('https://manage-students-7900e.firebaseio.com/DemandeInscriptionUsers.json', dem).subscribe(
          () => {
            alert('Opération bien effectuée');
          },
          (error) => {
            alert('Erreur : ' + error);
          }
        );
        i++;
      }
    }*/

}
