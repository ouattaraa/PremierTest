import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ɵangular_packages_platform_browser_platform_browser_e } from '@angular/platform-browser';
import * as firebase from 'firebase';
import { EtudiantMService } from 'src/app/services/etudiant-m.service';


@Component({
  selector: 'app-connexion-e',
  templateUrl: './connexion-e.component.html',
  styleUrls: ['./connexion-e.component.css']
})
export class ConnexionEComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private formBuider: FormBuilder,
              private authService: AuthService, 
              private etudiantService:EtudiantMService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    
  }
  initForm() {
    this.signinForm = this.formBuider.group(
      {

        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{8,}/)]],

      }
    )

  }


  onSubmit() {

    const email = this.signinForm.get('email').value;

    const password = this.signinForm.get('password').value;

    if(this.etudiantService.isStudent(email,password)){

      this.authService.signInStudent(email, password).then(

        () => {

          this.router.navigate(['/acceuil']);
  
        },
        (error) => {

          this.errorMessage = error;
        }
      );
    }else{
      this.errorMessage = "Vous n'êtes pas un étudiant sur cette plate-form!";
    }
    
  }


}
