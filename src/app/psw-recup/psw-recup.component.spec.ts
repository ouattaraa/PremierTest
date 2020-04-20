import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PswRecupComponent } from './psw-recup.component';

describe('PswRecupComponent', () => {
  let component: PswRecupComponent;
  let fixture: ComponentFixture<PswRecupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PswRecupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PswRecupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
