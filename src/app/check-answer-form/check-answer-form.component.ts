import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtudiantMService } from '../services/etudiant-m.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-answer-form',
  templateUrl: './check-answer-form.component.html',
  styleUrls: ['./check-answer-form.component.css']
})
export class CheckAnswerFormComponent implements OnInit {
  checkForm: FormGroup;
  errorMessage:string;
  constructor(private formBuilder: FormBuilder,private etudiantService:EtudiantMService,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.checkForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{8,}/)]]
      }
    )
  }

  onSubmit(){
    const email=this.checkForm.get('email').value;
    const password=this.checkForm.get('password').value;+
    this.etudiantService.userExistency(email,password);
    if(this.etudiantService.userExistency(email,password)){
      this.router.navigate(['/answer-view']);
    }
    else{
      this.errorMessage="Error: There is no user record corresponding to this identifier. The user may have been deleted."
    }

  }


}
