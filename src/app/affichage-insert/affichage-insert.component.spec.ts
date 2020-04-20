import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageInsertComponent } from './affichage-insert.component';

describe('AffichageInsertComponent', () => {
  let component: AffichageInsertComponent;
  let fixture: ComponentFixture<AffichageInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
