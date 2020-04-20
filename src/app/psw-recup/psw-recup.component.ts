import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtudiantMService } from '../services/etudiant-m.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-psw-recup',
  templateUrl: './psw-recup.component.html',
  styleUrls: ['./psw-recup.component.css']
})
export class PswRecupComponent implements OnInit {

  pswForgot: FormGroup;
  errorMessage: string;


  constructor(private formBuilder: FormBuilder, private etudiantService: EtudiantMService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.pswForgot = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
      }
    );
  }
  onSubmit() {

    const email = this.pswForgot.get('email').value;

    this.etudiantService.emailExiste(email);
    if (this.etudiantService.emailExiste(email)) {
      this.router.navigate(['/infos-psw']);
    } else {
      this.errorMessage = email + " n'existe pas !";
    }

  }


}
