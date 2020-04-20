import { Component, OnInit } from '@angular/core';
import { EtudiantMService } from '../services/etudiant-m.service';

@Component({
  selector: 'app-answer-view',
  templateUrl: './answer-view.component.html',
  styleUrls: ['./answer-view.component.css']
})
export class AnswerViewComponent implements OnInit {

  constructor(private etudiantService:EtudiantMService) { }
  reponse1:string;
  firstName:string;
  lastName:string;
  level:string;
 
  

  ngOnInit(): void {
  this.reponse1=this.etudiantService.answerA;
  this.firstName=this.etudiantService.prenom;
  this.lastName=this.etudiantService.nom;
  this.level=this.etudiantService.niveau;
}
}
