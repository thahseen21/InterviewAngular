import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrDashboardComponent } from './page/hr-dashboard/hr-dashboard.component';
// import { HrAddApplicantComponent } from './page/hr-add-applicant/hr-add-applicant.component';
import { NavComponent } from 'src/app/layout/nav/nav.component';

@NgModule({
  declarations: [
    HrDashboardComponent,
    // HrAddApplicantComponent
  ],
  imports: [CommonModule],
})
export class HrModule {}
