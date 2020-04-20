import { Component, OnInit, Input } from '@angular/core';
import { EtudiantMService } from '../services/etudiant-m.service';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() id: number;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() birthDay: Date;
  @Input() placeBirth: string;
  @Input() level: string;
  @Input() email: string;
  @Input() password: string;
  @Input() motivation: string;
  @Input() reponse: string;
  test:string;


  constructor(private etudiantService: EtudiantMService, private demandeService: DemandeService) { }

  ngOnInit(): void {
    this.testReponse();
  }

  getId() {
    return this.id;
  }

  onAcceptDemande() {
    this.etudiantService.acceptDemande(this.id);
    //navigation.

  }

  onRejectDemande() {
    this.etudiantService.rejectDemande(this.id);

  }

  color() {
    if (this.etudiantService.getReponse(this.id) === 'Accepté(e)') {
      return 'green';
    } else if (this.etudiantService.getReponse(this.id) === 'Refus') {
      return 'red';
    }
  }

  testReponse(){
    if(this.etudiantService.getReponse(this.id)===''){
      this.test='Pas Encore';
    }else{
      this.test='';
    }
  }

  onSave() {

    this.etudiantService.saveDemandeT(this.firstName, this.lastName,
    this.birthDay, this.placeBirth, this.level, this.email,
    this.password, this.motivation, this.reponse);
    this.updateReponse(this.id);
  }
  retReponse() {
    return this.etudiantService.getReponse(this.id);
  }


  updateReponse(id: number) {

    if (id < this.etudiantService.user.length) {
      this.etudiantService.user[id].reponse = this.reponse;
      this.etudiantService.initUser(this.firstName, this.lastName,
        this.birthDay, this.placeBirth, this.level, this.email,
        this.password, this.motivation, this.reponse);
    }

  }



}
