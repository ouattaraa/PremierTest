import { Component, OnInit } from '@angular/core';
import { AffichageService } from '../services/affichage.service';

@Component({
  selector: 'app-affichage-view',
  templateUrl: './affichage-view.component.html',
  styleUrls: ['./affichage-view.component.css']
})
export class AffichageViewComponent implements OnInit {


  affichages:any[];

  constructor(private affichageService:AffichageService ) { }
 
  ngOnInit(): void {
    this.affichages=this.affichageService.affichage;
  }

  onGetAffiche(){
    this.affichageService.getAffichage();
  }

}
