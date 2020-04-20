import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilAdminViewComponent } from './acceuil-admin-view.component';

describe('AcceuilAdminViewComponent', () => {
  let component: AcceuilAdminViewComponent;
  let fixture: ComponentFixture<AcceuilAdminViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceuilAdminViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
