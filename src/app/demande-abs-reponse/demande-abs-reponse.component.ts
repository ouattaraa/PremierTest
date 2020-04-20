import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-demande-abs-reponse',
  templateUrl: './demande-abs-reponse.component.html',
  styleUrls: ['./demande-abs-reponse.component.css']
})
export class DemandeAbsReponseComponent implements OnInit {
  firstName:string;
  lastName:string;
  level:string;
  dateDepart:string;
  dateRetour:string;
  reponse:string;


  constructor(private demandeService:DemandeService) { }

  ngOnInit(): void {
    this.firstName=this.demandeService.prenom;
    this.lastName=this.demandeService.nom;
    this.level=this.demandeService.niveau;
    this.dateDepart=this.demandeService.dateDepart;
    this.dateRetour=this.demandeService.dateRetour;
    this.reponse=this.demandeService.reponse;
  }

}
