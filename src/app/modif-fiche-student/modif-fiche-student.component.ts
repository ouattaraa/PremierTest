import { Component, OnInit } from '@angular/core';
import { EtudiantMService } from '../services/etudiant-m.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif-fiche-student',
  templateUrl: './modif-fiche-student.component.html',
  styleUrls: ['./modif-fiche-student.component.css']
})
export class ModifFicheStudentComponent implements OnInit {

  nom: string;
  prenom: string;
  email: string;
  password: string;
  niveau: string;
  dateNais: string;
  placeNais: string;
  motivation: string;
  id:number;

  changeForm: FormGroup;

  constructor(private studentService: EtudiantMService, private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.id=this.studentService.identifiant;
    this.nom = this.studentService.infoLastName;
    this.prenom = this.studentService.infoFirstName;
    this.dateNais = this.studentService.infoBirthDay;
    this.placeNais = this.studentService.infoPlaceBirth;
    this.niveau = this.studentService.infoLevel;
    this.email = this.studentService.infoEmail;
    this.password = this.studentService.infoPassword;
    this.motivation=this.studentService.infoMotivation;//tu payes et tu remets le textarea à sa place chef.okay.
    this.initForm();
  }

  initForm() {
    this.changeForm = this.formBuilder.group(
      {
        firstName: [this.prenom, Validators.required],
        lastName: [this.nom, Validators.required],
        birthDay: [this.dateNais, Validators.required],
        placeBirth:[this.placeNais,Validators.required],        
        level: [this.niveau, Validators.required],
        email: [this.email, [Validators.required, Validators.email]],
        password: [this.password, [Validators.required, Validators.pattern(/[0-9a-zA-Z]{8,}/)]],
        motivation:[this.motivation,Validators.required]

      }
    )

  }


  onSubmit() {
    const firstName = this.changeForm.get('firstName').value;
    const lastName = this.changeForm.get('lastName').value;
    const birthDay = this.changeForm.get('birthDay').value;
    const placeBirth=this.changeForm.get('placeBirth').value;
    const level = this.changeForm.get('level').value;
    const email = this.changeForm.get('email').value;
    const password = this.changeForm.get('password').value;
    const motivation=this.changeForm.get('motivation').value;
        this.studentService.removeEtudiantM(this.id); 
        this.studentService.changeId();
        this.studentService.modifyInfo(firstName,lastName,birthDay,placeBirth,level,email,password,motivation,'Accepté(e)');
        this.router.navigate(['/list-etudiant']);

     
  }

}
