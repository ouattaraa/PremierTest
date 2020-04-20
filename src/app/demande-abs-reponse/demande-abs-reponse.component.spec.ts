import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAbsReponseComponent } from './demande-abs-reponse.component';

describe('DemandeAbsReponseComponent', () => {
  let component: DemandeAbsReponseComponent;
  let fixture: ComponentFixture<DemandeAbsReponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeAbsReponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeAbsReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
