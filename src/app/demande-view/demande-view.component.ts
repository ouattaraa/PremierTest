import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-demande-view',
  templateUrl: './demande-view.component.html',
  styleUrls: ['./demande-view.component.css']
})
export class DemandeViewComponent implements OnInit {

  Demande:any[];
  constructor(private demandeService:DemandeService) { }

  ngOnInit(): void {

    this.Demande=this.demandeService.Demandes;

  }
 
onChargeDemande(){

 this.demandeService.chargerDemande();

}


}
