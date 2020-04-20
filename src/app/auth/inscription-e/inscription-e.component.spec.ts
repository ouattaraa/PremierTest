import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEComponent } from './inscription-e.component';

describe('InscriptionEComponent', () => {
  let component: InscriptionEComponent;
  let fixture: ComponentFixture<InscriptionEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
