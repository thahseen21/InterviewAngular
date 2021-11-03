import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../dummydata/candidateList.json';
@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss'],
})
export class HrDashboardComponent implements OnInit {
  candidateList: any = [
    {
      CandidateId: 1,
      Name: 'Mohammed Thahseen N',
      CreatedOn: '2021-10-12',
      AppliedFor: 'Full Stack Developer',
      CurrentRound: 4,
      InterviewAt: '2021-11-07',
      Interview: [
        { interviewerId: 1, interviewName: 'Jeeva' },
        { interviewerId: 1, interviewName: 'Madhan' },
      ],
    },
    {
      CandidateId: 2,
      Name: 'HariHaran Tamilarsan',
      CreatedOn: '2021-10-13',
      AppliedFor: 'Full Stack Developer',
      CurrentRound: 3,
      InterviewAt: '2021-11-07',
      Interview: [
        { interviewerId: 1, interviewName: 'Jeeva' },
        { interviewerId: 1, interviewName: 'Madhan' },
        { interviewerId: 1, interviewName: 'Ebe ' },
      ],
    },
    {
      CandidateId: 3,
      Name: 'Vijay',
      CreatedOn: '2021-10-13',
      AppliedFor: 'Integration',
      CurrentRound: 2,
      InterviewAt: null,
      Interview: [
        { interviewerId: 1, interviewName: 'Jeeva' },
        { interviewerId: 1, interviewName: 'Madhan' },
        { interviewerId: 1, interviewName: 'Ebe ' },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
