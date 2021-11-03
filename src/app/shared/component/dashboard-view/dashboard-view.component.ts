import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
})
export class DashboardViewComponent implements OnInit {
  @Input() candidateDetailList: any;

  list: any;

  constructor() {}

  ngOnInit(): void {
    this.list = this.candidateDetailList;
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
