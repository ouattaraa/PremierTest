import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtudiantMService } from '../services/etudiant-m.service';
import { Router } from '@angular/router';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-demande-abs-reponse-form',
  templateUrl: './demande-abs-reponse-form.component.html',
  styleUrls: ['./demande-abs-reponse-form.component.css']
})
export class DemandeAbsReponseFormComponent implements OnInit {

  checkForm: FormGroup;
  errorMessage: string;
  
  

  constructor(private formBuilder: FormBuilder, private demandeService: DemandeService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.checkForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        level: ['', Validators.required]
      }
    )
  }

  onSubmit() {

    const firstName = this.checkForm.get('firstName').value;
    const lastName = this.checkForm.get('lastName').value;
    const level = this.checkForm.get('level').value;
    this.demandeService.userDemandExist(firstName, lastName, level);
    if(this.demandeService.userDemandExist(firstName, lastName, level)){
      this.router.navigate(['/abs-reponse']);
    }
    else{
      this.errorMessage="Error: There is no user record corresponding to this identifier. The user may have been deleted";
    }

  }
}
