import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceConnectionComponent } from './choice-connection.component';

describe('ChoiceConnectionComponent', () => {
  let component: ChoiceConnectionComponent;
  let fixture: ComponentFixture<ChoiceConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
