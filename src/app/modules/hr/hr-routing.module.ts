import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrAddApplicantComponent } from './page/hr-add-applicant/hr-add-applicant.component';
import { HrDashboardComponent } from './page/hr-dashboard/hr-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HrDashboardComponent,
  },
  {
    path:'add-applicant',
    component: HrAddApplicantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrRoutingModule {}
