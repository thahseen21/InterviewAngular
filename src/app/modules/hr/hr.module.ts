import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrDashboardComponent } from './page/hr-dashboard/hr-dashboard.component';
// import { HrAddApplicantComponent } from './page/hr-add-applicant/hr-add-applicant.component';
import { DashboardViewComponent } from 'src/app/shared/component/dashboard-view/dashboard-view.component';
import { ApplicantCardComponent } from 'src/app/shared/component/applicant-card/applicant-card.component';
import { HrRoutingModule } from './hr-routing.module';
import { CardViewComponent } from 'src/app/shared/component/card-view/card-view.component';
import { AddInterviewerFormComponent } from 'src/app/shared/component/add-interviewer-form/add-interviewer-form.component';
import { ModalComponent } from 'src/app/shared/component/modal/modal.component';

@NgModule({
  declarations: [
    HrDashboardComponent,
    DashboardViewComponent,
    ApplicantCardComponent,
    CardViewComponent,
    AddInterviewerFormComponent,
    ModalComponent
  ],
  imports: [CommonModule, HrRoutingModule],
})
export class HrModule {}
