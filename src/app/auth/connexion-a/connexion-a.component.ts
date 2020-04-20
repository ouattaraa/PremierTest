import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { equal } from 'assert';


@Component({
  selector: 'app-connexion-a',
  templateUrl: './connexion-a.component.html',
  styleUrls: ['./connexion-a.component.css']
})
export class ConnexionAComponent implements OnInit {

  signinForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private router: Router) { }

  status = [
    'Maître Assistant Classe A',
    'Maître Assistant Classe B',
    'Maître Assistant Classe C',
    'Docteur Classe A',
    'Docteur Classe B',
    'Docteur Classe C',
    'Docteur Maître de Conférence Classe A',
    'Docteur Maître de Conférence Classe B',
    'Docteur Maître de Conférence Classe C',
    'Professeur Classe A',
    'Professeur Classe B',
    'Professeur Classe C',
  ];

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signinForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{8,}/)]],
        status: ['', Validators.required]
      }
    );
  }

  onSubmit() {
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    const status = this.signinForm.get('status').value;
    this.adminService.signInAdmin(email,password,status);
  }


 }

