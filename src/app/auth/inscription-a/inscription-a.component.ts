import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-a',
  templateUrl: './inscription-a.component.html',
  styleUrls: ['./inscription-a.component.css']
})
export class InscriptionAComponent implements OnInit {

  signForm: FormGroup;
  firstNameErr: string;
  lastNameErr: string;
  emailErr: string;
  passwordErr: string;
  statusErr: string;
  test: boolean;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

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
  initForm() {

    this.signForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        status: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required, Validators.pattern(/[0-9a-zA-Z]{8,}/)]
      }
    );
  }

  onSubmit() {
    const firstName = this.signForm.get('firstName').value;
    const lastName = this.signForm.get('lastName').value;
    const status = this.signForm.get('status').value;
    const email = this.signForm.get('email').value;
    const passwod = this.signForm.get('password').value;
    this.test=true;

    if (firstName === '') {
      this.test = false;
      this.firstNameErr = '* required';
    }
    else {
      this.test = true;
      this.firstNameErr = '';
    };

    if (lastName === '') {
      this.test = false;
      this.lastNameErr = '* required!';
    } else {
      this.test = true;
      this.lastNameErr = '';
    };
    if (status === '') {
      this.test = false;
      this.statusErr = '* required!';
    } else {
      this.test = true;
      this.lastNameErr = '';
    };

    if (email === '') {
      this.test = false;
      this.emailErr = '* required';
    }
    else {
      this.test = true;
      this.emailErr = '';
    };

    if (this.passwordErr === '') {
      this.test = false;
      this.passwordErr = '* required';
    }
    else {
      this.test = true;
      this.passwordErr = '';
    };

    if (this.test) {
      this.adminService.addAdmin(firstName, lastName, status, email, passwod);
      this.router.navigate(['/accueil-admin-view']);
    }
    /* else {
       this.onInitError();
     };*/
  }
  onInitError() {
    this.initForm();
    this.passwordErr = '';
    this.statusErr = ''
    this.emailErr = '';
    this.firstNameErr = '';
    this.lastNameErr = '';
  }
}

