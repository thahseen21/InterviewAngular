import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrAddApplicantComponent } from './hr-add-applicant.component';

describe('HrAddApplicantComponent', () => {
  let component: HrAddApplicantComponent;
  let fixture: ComponentFixture<HrAddApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrAddApplicantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrAddApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
