import { Component, OnInit, Input } from '@angular/core';
import { AffichageService } from '../services/affichage.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
 
  
@Input() titre:string;
@Input() contenu:string;
@Input() date:Date;
                   

  constructor() { }

  ngOnInit(): void {
    
  }


}
