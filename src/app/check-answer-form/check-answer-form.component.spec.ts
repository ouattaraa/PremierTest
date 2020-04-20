import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAnswerFormComponent } from './check-answer-form.component';

describe('CheckAnswerFormComponent', () => {
  let component: CheckAnswerFormComponent;
  let fixture: ComponentFixture<CheckAnswerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckAnswerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAnswerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
