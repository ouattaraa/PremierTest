import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;
  successMessage:string;

  Demande: any[];


  constructor(private formBuider: FormBuilder,
    private authService: AuthService,
    private demandeService: DemandeService,
    private router: Router) { }

  ngOnInit(): void {
    this.Demande = this.demandeService.Demandes;
    this.initForm();
  }
  initForm() {
    this.signupForm = this.formBuider.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        date: ['', Validators.required],
        dateDebut: ['', Validators.required],
        dateFin: ['', Validators.required],
        cause: ['', Validators.required],
        level: ['', Validators.required],
      }
    )

  }


  onSubmit() {
    const firstName = this.signupForm.get('firstName').value;
    const lastName = this.signupForm.get('lastName').value;
    const date = this.signupForm.get('date').value;
    const level = this.signupForm.get('level').value;
    const dateDebut = this.signupForm.get('dateDebut').value;
    const dateFin = this.signupForm.get('dateFin').value;
    const cause = this.signupForm.get('cause').value;
    if (confirm('Etes-vous sûr de transmettre votre demande?')) {
      this.demandeService.addDmeande(firstName, lastName, date, level, dateDebut, dateFin, cause,'');
      this.successMessage="Demande envoyé avec succès";
    }

  }
  onCancel()
  {
    this.initForm();
  }

}
