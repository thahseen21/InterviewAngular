import { Component, OnInit } from '@angular/core';
import * as dummydata from '../../../../dummydata/data.json';
@Component({
  selector: 'app-applicant-card',
  templateUrl: './applicant-card.component.html',
  styleUrls: ['./applicant-card.component.scss'],
})
export class ApplicantCardComponent implements OnInit {
  data: any = dummydata;

  constructor() {}

  ngOnInit(): void {}

  openInterviewReview(index: number) {
    let element = document.getElementById(`interview-review-${index}`);

    if (element?.className === `interview-review show-review`) {
      element.classList.remove('show-review');
    } else {
      element?.classList.add('show-review');
    }
  }
}
