import { Component, OnInit, Input } from '@angular/core';
import { DemandeService } from '../services/demande.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  @Input() studentLastName: string;
  @Input() studentFirstName: string;
  @Input() studentLevel: string;
  @Input() studentBirthDay: Date;
  @Input() dateDebut: Date;
  @Input() dateFin: Date;
  @Input() cause: string;
  @Input() reponse: string;
  @Input() id: number;
  @Input() motif: string;

  signForm: FormGroup;
  DemandeTraite = [];

  constructor(private demandeService: DemandeService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder) { }



  ngOnInit(): void {
    this.initForm();
    this.DemandeTraite = this.demandeService.DemandesTraitees;
  }

  initForm() {
    this.signForm = this.formBuilder.group({
      motif: ['', Validators.required],
    }
    );
  }

  onSubmit() {

      if(this.reponse==='non'){
        const motif = this.signForm.get('motif');
        alert("Reponse :"+this.reponse+" Motif "+motif.value);
      }
    
  }

  getReponse() {
    return this.reponse;
  }

  getColor() {
    if (this.reponse === 'oui') {
      return 'green';
    } else if (this.reponse === 'non') {
      return 'red';
    }
  }

  accepterA() {
    this.demandeService.acceptOne(this.id);

  }
  refuserA() {
    this.demandeService.refusOne(this.id);

  }

  getMotif() {
    if (this.getReponse() === 'non') {
      const motif = this.signForm.get('motif').value;
      console.log("motif" + motif);

    }
  }

  statusReponse() {
    if (this.getReponse() === 'oui' || this.getReponse() === 'non') {
      return true;
    }
    return false;
  }
  annulerTraitement() {
    this.reponse = '';
  }

  getId() {
    console.log("id" + this.id+" reponse:"+this.reponse);
  }

  onSaveDemandesTraitees() {

      this.demandeService.addDmeande(this.studentFirstName,this.studentLastName,this.studentBirthDay,
                                      this.studentLevel,this.dateDebut,this.dateFin,this.cause,this.reponse);
      this.demandeService.removeDemandeT(this.id);
      this.demandeService.changeDemandeId();
      
  }

}