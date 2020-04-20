import { Component, OnInit, Injectable } from '@angular/core';
import { EtudiantMService } from '../services/etudiant-m.service'

@Injectable()

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {

 Acceptedetudiant:any[];

  constructor(private etudiantService:EtudiantMService) { }

  ngOnInit(): void {
    this.Acceptedetudiant=this.etudiantService.etudiantAccepte;
  }

  onGetEtudiantAcc(){
    this.etudiantService.getEtudiantAccepte();
  }
  


}
