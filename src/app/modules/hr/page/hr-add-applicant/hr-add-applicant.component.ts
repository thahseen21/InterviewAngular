import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-add-applicant',
  templateUrl: './hr-add-applicant.component.html',
  styleUrls: ['./hr-add-applicant.component.scss']
})
export class HrAddApplicantComponent implements OnInit {


  fileName: string= '';
  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any){
    
  }

}
