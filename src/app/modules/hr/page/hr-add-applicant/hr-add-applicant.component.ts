import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hr-add-applicant',
  templateUrl: './hr-add-applicant.component.html',
  styleUrls: ['./hr-add-applicant.component.scss']
})
export class HrAddApplicantComponent implements OnInit {


  applicantForm: FormGroup=new FormGroup({});

  constructor() { }

  fileName = '';

  ngOnInit(): void {
    this.applicantForm = new FormGroup({
      name: new FormControl(),
      lastEmployer: new FormControl(),
      lastDesignation: new FormControl(),
      appliedFor: new FormControl(),
      referedBy: new FormControl(),
      medicalStatus: new FormControl(),
      noticePeriod: new FormControl(),
      resume: new FormControl()
    })
  }

  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        // resume.append("thumbnail", file);

        // const upload$ = this.http.post("/api/thumbnail-upload", formData);

        // upload$.subscribe();
    }
}

  onSubmit(): void {
    console.log(this.applicantForm.value);
  }

}
