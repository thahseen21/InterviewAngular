import { Component, OnInit } from '@angular/core';
import * as dummydata from '../../../../dummydata/data.json';
@Component({
  selector: 'app-applicant-card',
  templateUrl: './applicant-card.component.html',
  styleUrls: ['./applicant-card.component.scss']
})
export class ApplicantCardComponent implements OnInit {

 data :any = dummydata;

  constructor() { }

  ngOnInit(): void {
  }

  addEventHandler(){
    let element = document.getElementsByClassName('ps__rail-y')[0] as HTMLElement;
    element.addEventListener('click', this.scroll, true);
  }
  
  scroll(e:Event){
    e.stopPropagation();
  }

}
