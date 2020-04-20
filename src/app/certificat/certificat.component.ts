import { Component, OnInit } from '@angular/core';
import { EtudiantMService } from '../services/etudiant-m.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certificat',
  templateUrl: './certificat.component.html',
  styleUrls: ['./certificat.component.css']
})
export class CertificatComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  birthDay: string = '';
  placeBirth: string = '';
  level: string = '';

  constructor(private etudiantService:EtudiantMService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    
    const id=this.router.snapshot.params['id'];
    this.firstName=this.etudiantService.getStudentById(+id).firstName;
    this.lastName=this.etudiantService.getStudentById(+id).lastName;
    this.birthDay=this.etudiantService.getStudentById(+id).birthDay;
    this.placeBirth=this.etudiantService.getStudentById(+id).placeBirth;
    this.level=this.etudiantService.getStudentById(+id).level;
  }

}
