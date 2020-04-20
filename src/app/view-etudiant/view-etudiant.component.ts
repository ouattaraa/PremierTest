import { Component, OnInit, Input } from '@angular/core';
import { EtudiantMService } from '../services/etudiant-m.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-etudiant',
  templateUrl: './view-etudiant.component.html',
  styleUrls: ['./view-etudiant.component.css']
})
export class ViewEtudiantComponent implements OnInit {
  @Input() id: number;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() birthDay: string;
  @Input() level: string;
  @Input() email: string;
  @Input() password: string;
  @Input() placeBirth: string;
  @Input() motivation: string;


  constructor(private etudiantService: EtudiantMService, private router: Router) { }

  ngOnInit(): void {

  }

  onRemoveStudent() {

    this.etudiantService.removeEtudiant(this.id);
  }

  onGetInfo() {
    this.etudiantService.getInformation(this.id);

    if (this.etudiantService.getInformation(this.id)) {
      this.router.navigate(['/single-etudiant']);
    } else {
      alert("Dihia,please, it is impossiblllllle!!");
    }
  }

  onChange() {
    this.etudiantService.getInformation(this.id);
    if (this.etudiantService.getInformation(this.id)) {
      this.router.navigate(['/modif-student']);
    } else {
      alert('There is an error ,please try again!');
    }
  }


}
