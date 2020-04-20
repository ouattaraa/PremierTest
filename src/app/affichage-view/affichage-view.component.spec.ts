import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageViewComponent } from './affichage-view.component';

describe('AffichageViewComponent', () => {
  let component: AffichageViewComponent;
  let fixture: ComponentFixture<AffichageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
