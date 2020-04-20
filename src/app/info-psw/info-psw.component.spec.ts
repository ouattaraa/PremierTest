import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPswComponent } from './info-psw.component';

describe('InfoPswComponent', () => {
  let component: InfoPswComponent;
  let fixture: ComponentFixture<InfoPswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
