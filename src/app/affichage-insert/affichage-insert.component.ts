import { Component, OnInit } from '@angular/core';
import { AffichageService } from '../services/affichage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affichage-insert',
  templateUrl: './affichage-insert.component.html',
  styleUrls: ['./affichage-insert.component.css']
})
export class AffichageInsertComponent implements OnInit {
  addForm: FormGroup;
  bool: boolean;
  titleErr: string;
  contentErr: string;
  dateErr: string;
  succes: string;


  constructor(private affichageServive: AffichageService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        content: ['', Validators.required],
        date: ['', Validators.required]
      }

    );
  }

  onInsert() {
    const title = this.addForm.get('title').value;
    const content = this.addForm.get('content').value;
    const date = this.addForm.get('date').value;

    if (title === '') {
      this.bool = false;
      this.titleErr = "Veuillez saisir le titre avant de valider.";
    } else {
      this.bool = true;
      this.titleErr = "";
    };
    if (content === '') {
      this.bool = false;
      this.contentErr = 'Veuillez saisir le contenu avant de valider.';
    } else {
      this.bool = true;
      this.contentErr = "";

    };

    if (date === '') {
      this.bool = false;
      this.dateErr = 'Veuillez saisir la date avant de valider.';

    } else {
      this.bool = true;
      this.dateErr = "";
    };

    if (this.bool) {
      this.affichageServive.addAffichage(title, content, date);
      this.succes = "Affichage ajouté avec succès";
      //this.router.navigate(['/affichage-view']);
    }


  }

  onInitMessageErr() {
    this.initForm();
    this.contentErr = '';
    this.titleErr = '';
    this.dateErr = '';
  }







}
