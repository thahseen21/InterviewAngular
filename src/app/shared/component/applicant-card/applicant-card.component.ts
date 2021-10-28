import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-card',
  templateUrl: './applicant-card.component.html',
  styleUrls: ['./applicant-card.component.scss']
})
export class ApplicantCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nameBatch = 'H';
  name = 'Hari';
  position = 'Developer';
  
  addEventHandler(){
    let element = document.getElementsByClassName('ps__rail-y')[0] as HTMLElement;
    element.addEventListener('click', this.scroll, true);
  }
  
  scroll(e:Event){
    e.stopPropagation();
  }

}
