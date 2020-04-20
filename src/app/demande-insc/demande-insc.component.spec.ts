import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeInscComponent } from './demande-insc.component';

describe('DemandeInscComponent', () => {
  let component: DemandeInscComponent;
  let fixture: ComponentFixture<DemandeInscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeInscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeInscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
