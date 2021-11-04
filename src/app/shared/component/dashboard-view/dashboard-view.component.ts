import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
})
export class DashboardViewComponent implements OnInit {
  @Input() candidateDetailList: any;

  list: any;
  
  inProgress: number = 0;
  scheduledCount: number = 0;
  nonScheduledCount: number = 0;
  
  today: number = Date.now();

  constructor() {}

  ngOnInit(): void {
    this.list = this.candidateDetailList;

    this.inProgress = this.candidateDetailList.length;

    this.scheduledCount = this.candidateDetailList.filter(
      (candidate: any) => candidate.InterviewAt !== null
    ).length;

    this.nonScheduledCount = this.inProgress - this.scheduledCount;
  }

  filterCandidateList(data: string) {
    switch (data) {
      case 's':
        this.list = this.candidateDetailList.filter(
          (candidateDetail: any) => candidateDetail.InterviewAt !== null
        );
        break;
      case 'ns':
        this.list = this.candidateDetailList.filter(
          (candidateDetail: any) => candidateDetail.InterviewAt === null
        );
        break;
      default:
        this.list = this.candidateDetailList;
    }
    console.log('list', this.list);
  }
}
