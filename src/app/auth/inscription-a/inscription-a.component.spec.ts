import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionAComponent } from './inscription-a.component';

describe('InscriptionAComponent', () => {
  let component: InscriptionAComponent;
  let fixture: ComponentFixture<InscriptionAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
