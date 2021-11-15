import { Component, OnInit } from '@angular/core';
import { ApiEndpointService } from 'src/app/core/service/api-endpoint.service';
import { ApiHttpService } from 'src/app/core/service/api-http.service';
@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss'],
})
export class HrDashboardComponent implements OnInit {
  candidateList: any = [];

  constructor(
    private apiEndPointService: ApiEndpointService,
    private apiHttpService: ApiHttpService
  ) {}

  ngOnInit(): void {
    this.apiHttpService
      .get(this.apiEndPointService.getAllApplicant())
      .subscribe((data) => {
        console.log(data);
        this.candidateList.push(...data.data);
        console.log(this.candidateList);
      });
  }
}
