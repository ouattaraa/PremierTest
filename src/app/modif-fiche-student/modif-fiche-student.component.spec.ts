import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifFicheStudentComponent } from './modif-fiche-student.component';

describe('ModifFicheStudentComponent', () => {
  let component: ModifFicheStudentComponent;
  let fixture: ComponentFixture<ModifFicheStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifFicheStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifFicheStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
