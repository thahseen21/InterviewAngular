import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CardViewComponent } from './shared/component/card-view/card-view.component';
import { SearchBarComponent } from './shared/component/search-bar/search-bar.component';
import { ApplicantCardComponent } from './shared/component/applicant-card/applicant-card.component';
import { DashboardViewComponent } from './shared/component/dashboard-view/dashboard-view.component';
import { ModalComponent } from './shared/component/modal/modal.component';
import { AddInterviewerFormComponent } from './shared/component/add-interviewer-form/add-interviewer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    CardViewComponent,
    SearchBarComponent,
    ApplicantCardComponent,
    DashboardViewComponent,
    ModalComponent,
    AddInterviewerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
