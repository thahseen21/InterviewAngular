import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hr-add-applicant',
  templateUrl: './hr-add-applicant.component.html',
  styleUrls: ['./hr-add-applicant.component.scss']
})
export class HrAddApplicantComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  applicantForm: FormGroup=new FormGroup({});

  fileName = '';

  formErrors: any={
    'name':'',
    'lastEmployer':'',
    'lastDesignation':'',
    'appliedFor':'',
    'referedBy':'',
    'noticePeriod':'',
    'resume':''
  };

  validationMessages: any ={
    'name':{
      'required':'Name is required.',
      'minlength':'Name must be greater than 2 characters.',
      'maxlength':'Name must be less than 20 characters'
    },
    'lastEmployer':{
      'required':'lastEmployer is required.',
      'maxlength':'Last employer name must be less than 30 characters'
    },
    'lastDesignation':{
      'required':'Last designation is required.',
      'maxlength':'Last designation must be less than 15 characters'
    },
    'appliedFor':{
      'required':'Applied designation is required.',
      'maxlength':'Designation must be less than 15 characters'
    },
    'referedBy':{
      'maxlength':'Name must be less than 20 characters'
    },
    'medicalStatus':{
      'maxlength':'Medical status must be less than 100 characters'
    },
    'noticePeriod':{
      'required':'Please enter the notice period.'
    },
    'resume':{
      'required':'Please upload the resume'
    }
  };

  ngOnInit(): void {
    this.applicantForm = this.fb.group({
      name:['',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastEmployer: ['', [Validators.required, Validators.maxLength(30)]],
      lastDesignation: ['', [Validators.required, Validators.maxLength(15)]],
      appliedFor: ['', [Validators.required, Validators.maxLength(15)]],
      referedBy: ['', Validators.maxLength(20)],
      medicalStatus: ['', Validators.maxLength(100)],
      noticePeriod: ['', Validators.required],
      resume: ['', Validators.required]
    });

    //when the form value changes, logValidationErrors fuction is called
    this.applicantForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.applicantForm);
    })
  }

    //Validation function
    logValidationErrors(group: FormGroup = this.applicantForm): void {
      Object.keys(group.controls).forEach((key: string) => {
        const abstractControl = group.get(key);
        if (abstractControl instanceof FormGroup) {
          this.logValidationErrors(abstractControl);
        } else {
          this.formErrors[key] = '';
          if (abstractControl && !abstractControl.valid
              && (abstractControl.touched || abstractControl.dirty)) {
            const messages = this.validationMessages[key];
            for (const errorKey in abstractControl.errors) {
              if (errorKey) {
                this.formErrors[key] += messages[errorKey] + ' ';
              }
            }
          }
        }
      });
    }

  onFileSelected(event: any){
    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        this.applicantForm.patchValue({
          resume: file
        })
    }
  }

  onSubmit(): void {
    console.log(this.applicantForm.value);
  }

}
