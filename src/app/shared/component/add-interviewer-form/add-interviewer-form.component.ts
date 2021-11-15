import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-interviewer-form',
  templateUrl: './add-interviewer-form.component.html',
  styleUrls: ['./add-interviewer-form.component.scss'],
})
export class AddInterviewerFormComponent implements OnInit {
  constructor() {}

  @Input() interviewAt: any;

  ngOnInit(): void {
    console.log('im on init potato');
    console.log(this.interviewAt, 'ontervoewAt');
  }

  addInterviewDate(event: any) {
    console.log(event);
  }
}
