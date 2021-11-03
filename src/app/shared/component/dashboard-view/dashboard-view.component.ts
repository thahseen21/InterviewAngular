import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
})
export class DashboardViewComponent implements OnInit {
  @Input() candidateDetailList: any;

  constructor() {}

  ngOnInit(): void {}

  list: any[] = ['H', 'T', 1, 1, 1, 1, 1, 1, 1];
}
