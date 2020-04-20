import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilAdminComponent } from './acceuil-admin.component';

describe('AcceuilAdminComponent', () => {
  let component: AcceuilAdminComponent;
  let fixture: ComponentFixture<AcceuilAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceuilAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
