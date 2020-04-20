import { Component, OnInit } from '@angular/core';
import { EtudiantMService } from '../services/etudiant-m.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.css']
})
export class SingleStudentComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  birthDay: string = '';
  placeBirth: string = '';
  level: string = '';
  email: string = '';
  password: string = '';
  motivation: string = '';

  constructor(private etudiantSercice: EtudiantMService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.firstName = this.etudiantSercice.infoFirstName;
    this.lastName = this.etudiantSercice.infoLastName;
    this.birthDay = this.etudiantSercice.infoBirthDay;
    this.placeBirth = this.etudiantSercice.infoPlaceBirth;
    this.level = this.etudiantSercice.infoLevel;
    this.email = this.etudiantSercice.infoEmail;
    this.password = this.etudiantSercice.infoPassword;
    this.motivation = this.etudiantSercice.infoMotivation;
  }
  
  onMove() {
    this.router.navigate(['/list-etudiant']);
  }

}
