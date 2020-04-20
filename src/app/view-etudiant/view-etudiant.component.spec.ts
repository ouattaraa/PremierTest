import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEtudiantComponent } from './view-etudiant.component';

describe('ViewEtudiantComponent', () => {
  let component: ViewEtudiantComponent;
  let fixture: ComponentFixture<ViewEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
