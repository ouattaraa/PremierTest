import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAbsReponseFormComponent } from './demande-abs-reponse-form.component';

describe('DemandeAbsReponseFormComponent', () => {
  let component: DemandeAbsReponseFormComponent;
  let fixture: ComponentFixture<DemandeAbsReponseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeAbsReponseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeAbsReponseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
