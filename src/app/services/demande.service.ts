import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class DemandeService {

    Demandes = [
     /* {
            id: 0,
            studentFirstName: 'AMIDOU',
            studentLastName: 'OUATTARA',
            studentBirthDay: '20.02.2002',
            studentLevel: 'Licence 3 SI',
            dateDebut: '01.01.2020',
            dateFin: '01.02.2020',
            cause: 'Jai peur de covid-19',
            reponse: 'oui'
        },

        {
            id:1,
            studentFirstName: 'Dihia',
            studentLastName: 'SAIDANI',
            studentBirthDay: '20.02.2002',
            studentLevel: 'Licence 3 SI',
            dateDebut: '01.03.2020',
            dateFin: '01.04.2020',
            cause: 'Jai eu de problème avec Odoo et apres on etait en baggare avec angular!',
            reponse: ''
        },

        {
            id:2,
            studentFirstName: 'Amidou',
            studentLastName: 'OUATTARA',
            studentBirthDay: '20.02.2002',
            studentLevel: 'Licence 3 SI',
            dateDebut: '01.01.2020',
            dateFin: '01.02.2020',
            cause: 'Jai peur de covid-19',
            reponse: 'non'
        },

       

        {
            id: 3,
            studentFirstName: 'Haland',
            studentLastName: 'SAIDANI',
            studentBirthDay: '20.02.2002',
            studentLevel: 'Licence 2 SI',
            dateDebut: '01.03.2020',
            dateFin: '01.04.2021',
            cause: 'Jetais completement degouté avec angular!',
            reponse: ''
        }*/
    ]

    DemandesTraitees=[

        {
        id: 0,
        studentFirstName: 'Amidou',
        studentLastName: 'OUATTARA',
        studentBirthDay: '20.02.2002',
        studentLevel: 'Licence 3 SI',
        dateDebut: '01.01.2020',
        dateFin: '01.02.2020',
        cause: 'Jai peur de covid-19',
        reponse: 'oui'
     }

    ]

    constructor(private httpClient: HttpClient,private router:Router) { };

    addDmeande(firstName: string, lastName: string, date: Date, level: string, dateDebut: Date, dateFin: Date, cause: string,reponse:string) {

        const DemandeOb = {
            id: 0,
            studentFirstName: '',
            studentLastName: '',
            studentBirthDay: '',
            studentLevel: '',
            dateDebut: '',
            dateFin: '',
            cause: '',
            reponse: ''
        }

        //on crée new demande now,
        this.chargerDemande();
        DemandeOb.id = this.Demandes[(this.Demandes.length - 1)].id + 1;
        DemandeOb.studentFirstName = firstName;
            DemandeOb.studentLastName = lastName;
            DemandeOb.studentBirthDay = date + "";
            DemandeOb.studentLevel = level;
            DemandeOb.dateDebut = dateDebut + "";
            DemandeOb.dateFin = dateFin + "";
            DemandeOb.cause = cause;
            DemandeOb.reponse = reponse;

            if(reponse==='non' || reponse==='oui'){
                this.DemandesTraitees.push(DemandeOb);
                this.saveDemandeTraite();

            }
            this.Demandes.push(DemandeOb);
            this.saveDemandeOnFirebase();
    }

   

    demandeDb() {
        firebase.database().ref('/demande-view').set(this.Demandes);

    }

    saveDemandeOnFirebase() {

        this.httpClient.put('https://manage-students-7900e.firebaseio.com/Demandes.json', this.Demandes).subscribe(
            () => {
                console.log("It is okkkkkkk!!");
            },
            () => {
                console.log("Erreur !!!!!!!!!!!!!");
            }
        );
    }

    saveDemandeTraite(){//sauvegarde des demandes traitées.

        this.httpClient.put('https://manage-students-7900e.firebaseio.com/DemandesTraitees.json', this.DemandesTraitees).subscribe(
            () => {
               alert('La demande a été enregistrée avec success!');
            },
            () => {
                console.log("Erreur !!!!!!!!!!!!!");
            }
        );
    }

    getReponse(id: number) {
        return this.Demandes[id].reponse;
    }

    getDemandeId(id: number) {
        const demande = this.Demandes.find(
            (d) => { return d.id === id; }
        );
        return demande;
    }

    acceptOne(id:number){
        this.Demandes[id].reponse='oui';
    }


    refusOne(id:number){
        this.Demandes[id].reponse='non';
    }



changeReponse(id:number,reponse:string){
     this.chargerDemande();
    for(var i=0;i<this.Demandes.length;i++){
        if(this.Demandes[i].id===id){
            this.Demandes[i].reponse=reponse;
            alert("Reponse de la demande N° "+id+" modifiée!");
        }
    }
}

    chargerDemande(){
        this.httpClient.get<any[]>('https://manage-students-7900e.firebaseio.com/Demandes.json').subscribe(
            (response)=>{
                this.Demandes=response;
            },
            (error)=>{
                alert("Erreur de chargement de demandes:"+error);
            }
            );
}




removeDemandeT(id:number){

    let i=0;
    while(i<this.Demandes.length){
        if(this.Demandes[i].id===id){
          const d=this.Demandes;
     
            d.splice(d.indexOf(d[i]),1);

            this.httpClient.put('https://manage-students-7900e.firebaseio.com/Demandes.json',d).subscribe(
                ()=>{
                    alert('Demande Traité avec succèss!');
                },
                (error)=>{
                    alert("Erreur dans votre traitement:"+error);
                }
            );
            this.changeDemandeId();
            this.router.navigate(['/demande-view'])
            break;
        }
        i++;
    }
 }

 changeDemandeId(){
     this.chargerDemande();
     let i=0;
     const demandeIdModifie=this.Demandes;
     while(i<demandeIdModifie.length){
         demandeIdModifie[i].id=i;
         this.httpClient.put('https://manage-students-7900e.firebaseio.com/Demandes.json',demandeIdModifie).subscribe(
             ()=>{
                 alert('Operation correctement effectuée!');
             },
             (error)=>{
                alert("Attention Dihia: "+error);
             }
         )
         i++;
     }
 }
 test:boolean;
 nom:string;
 prenom:string;
 niveau:string;
 reponse:string;
 dateDepart:string; 
 dateRetour:string;

 userDemandExist(firstName:string,lastName:string,level:string){
     this.chargerDemande();
     for(var i = 0 ; i < this.Demandes.length ; i++ ){
         if(this.Demandes[i].studentFirstName===firstName && this.Demandes[i].studentLastName===lastName && this.Demandes[i].studentLevel===level){
             this.nom=this.Demandes[i].studentLastName;
             this.prenom=this.Demandes[i].studentFirstName;
             this.niveau=this.Demandes[i].studentLevel;
             this.dateDepart=this.Demandes[i].dateDebut;
             this.dateRetour=this.Demandes[i].dateFin;
             this.reponse=this.Demandes[i].reponse;
             return true;   
               break;
         }
    }
    return false;
 }
}
