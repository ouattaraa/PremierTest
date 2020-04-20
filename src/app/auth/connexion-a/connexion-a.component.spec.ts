import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionAComponent } from './connexion-a.component';

describe('ConnexionAComponent', () => {
  let component: ConnexionAComponent;
  let fixture: ComponentFixture<ConnexionAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
