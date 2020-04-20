import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ɵangular_packages_platform_browser_platform_browser_e } from '@angular/platform-browser';
import { EtudiantMService } from 'src/app/services/etudiant-m.service';

@Component({
  selector: 'app-inscription-e',
  templateUrl: './inscription-e.component.html',
  styleUrls: ['./inscription-e.component.css']
})
export class InscriptionEComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;
  user: any[];
  successMessage:string=" Demande d'Inscription effectuée avec succès!";

  level = ["Licence 1 Mathématique-Informatique", "Licence 2 Système Informatique", "Licence 3 Système Informatique",
    "Master 1 Génie Logiciel", "Master 1 Sécurité et Réseaux Informatique", "Master 1 Intelligence Artificielle",
    "Master 2 Génie Logiciel", "Master 2 Sécurité et Réseaux Informatique", "Master 2 Intelligence Artificielle"];

  active:boolean=false;

  constructor(private formBuider: FormBuilder,
    private authService: AuthService,
    private etudiantService: EtudiantMService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.user = this.etudiantService.user;
  }
  initForm() {
    this.signupForm = this.formBuider.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        birthDay: ['', Validators.required],
        placeBirth: ['', Validators.required],
        level: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{8,}/)]],
        motivation: ['', Validators.required]

      }
    )

  }


  onSubmit() {
    const firstName = this.signupForm.get('firstName').value;
    const lastName = this.signupForm.get('lastName').value;
    const birthDay = this.signupForm.get('birthDay').value;
    const placeBirth = this.signupForm.get('placeBirth').value;
    const level = this.signupForm.get('level').value;
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    const motivation = this.signupForm.get('motivation').value;

    this.etudiantService.initUser(firstName, lastName, birthDay, placeBirth, level, email, password, motivation, '');
    this.active=true;
  }

}