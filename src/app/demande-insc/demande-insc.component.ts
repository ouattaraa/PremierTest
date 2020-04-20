import { Component, OnInit } from '@angular/core';
import { EtudiantMService } from '../services/etudiant-m.service';

@Component({
  selector: 'app-demande-insc',
  templateUrl: './demande-insc.component.html',
  styleUrls: ['./demande-insc.component.css']
})
export class DemandeInscComponent implements OnInit {

  users:any[];

  constructor(private etudiantService:EtudiantMService) { }
    
  ngOnInit(): void {
    this.users=this.etudiantService.user;
  }
  onGetUsersDemand(){
    this.etudiantService.getDemandeInsc();
  }

}
