import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionEComponent } from './connexion-e.component';

describe('ConnexionEComponent', () => {
  let component: ConnexionEComponent;
  let fixture: ComponentFixture<ConnexionEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
