import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffichageService {

  affichage = [

  /*  {

      titre: 'Inscription',
      contenu: 'Il est porté à la connaissance de tous les étudiants que les inscription debuteront le 1er Septembre 2020',
      date: '01.04.2020'

    },

    {
      titre: 'Covid-19',
      contenu: 'Veuillez repecter les messures de preventions pour proteger toute la population!',
      date: '01.01.2020'
    },

    {

      titre: 'Angular',
      contenu: 'Tu as été le prémier langage de developpement web à nous faire rever!',
      date: '03.04.2020'

    }*/
  ];

  constructor(private httpClient: HttpClient) { }


  addAffichage(titre: string, contenu: string, date: Date) {
    const affiche = {
      titre: '',
      contenu: '',
      date: ''
    }
    affiche.titre = titre;
    affiche.contenu = contenu;
    affiche.date = date + "";
    this.affichage.push(affiche);
    this.saveAffichage();
  }

  saveAffichage() {
    this.httpClient.put('https://manage-students-7900e.firebaseio.com/Affichages.json', this.affichage).subscribe(
      () => {
        alert('Votre Affichage est ajouté avec succés');
      },
      (error) => {
        alert('Votre affichage n\'a pas été ajouté:Erreur ' + error);
      }
    );
  }

  getAffichage(){
     this.httpClient.get<any[]>('https://manage-students-7900e.firebaseio.com/Affichages.json').subscribe(
      (reponse)=>{
        this.affichage=reponse;
      },
      (error)=>{
        alert('Erreur : '+error);
      }
    )
  }

}
