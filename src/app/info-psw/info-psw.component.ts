import { Component, OnInit } from '@angular/core';
import { EtudiantMService } from '../services/etudiant-m.service';

@Component({
  selector: 'app-info-psw',
  templateUrl: './info-psw.component.html',
  styleUrls: ['./info-psw.component.css']
})
export class InfoPswComponent implements OnInit {

  constructor(private etudiantService:EtudiantMService) { }
  password:string;
  firstName:string;
  lastName:string;
   

  ngOnInit(): void {
    
    this.password=this.etudiantService.password;
    this.firstName=this.etudiantService.firstName;
    this.lastName=this.etudiantService.lastName;
  }

}
