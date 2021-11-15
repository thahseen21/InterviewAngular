import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { data } from 'jquery';
import { ApiEndpointService } from 'src/app/core/service/api-endpoint.service';
import { HttpService } from 'src/app/core/service/http.service';
import { AddApplicant } from 'src/app/data/schema/add-applicant';

@Component({
  selector: 'app-add-applicant',
  templateUrl: './add-applicant.component.html',
  styleUrls: ['./add-applicant.component.scss']
})
export class AddApplicantComponent implements OnInit {


  constructor(
    private fb: FormBuilder,
    private apiEndPointService: ApiEndpointService,
    private httpService: HttpService
    ) { }

  applicantForm: FormGroup=new FormGroup({});

  fileName = '';

    
  designationList: {designationID: number, designation: string}[] = [];

  userList: {userID: number, name: string}[] = [];

  applicant: AddApplicant = {
    userID: 0,
    applicantID: 0,
    firstName: '',
    lastName: '',
    lastEmployer:'',
    lastDesignation:'',
    appliedFor: 0,
    referedBy: 0,
    medicalStatus:'',
    noticePeriod:0,
    resume:''
  };

  formErrors: any={
    'firstName':'',
    'lastName':'',
    'lastEmployer':'',
    'lastDesignation':'',
    'appliedFor':'',
    'referedBy':'',
    'noticePeriod':'',
    'resume':''
  };

  validationMessages: any ={
    'firstName':{
      'required':'First Name is required.',
      'maxlength':'First Name must be less than 20 characters'
    },
    'lastName':{
      'required':'Name is required.',
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

    
    this.getUser();
    this.getDesignation();

    this.applicantForm = this.fb.group({
      applicantID:[0],
      userID:[1],
      firstName:['',[Validators.required, Validators.maxLength(20)]],
      lastName:['',[Validators.required, Validators.maxLength(20)]],
      lastEmployer: ['', [Validators.required, Validators.maxLength(30)]],
      lastDesignation: ['', [Validators.required, Validators.maxLength(30)]],
      appliedFor: ['', Validators.required],
      referedBy: ['', ],
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
    console.log('On submit')
    this.mapFormValuestoApplicantModel();
    
    console.log(this.applicant)
    this.httpService.post(this.apiEndPointService.addApplicant(),{},this.applicant).subscribe();
  }


  getUser() {
    this.httpService.get(this.apiEndPointService.getUser())
    .subscribe((data) =>{
      this.userList.push(...data);
    })
  };

  getDesignation() {
    this.httpService.get(this.apiEndPointService.getDesignation())
    .subscribe((data) => {
      this.designationList.push(...data);
    })
  };

  mapFormValuestoApplicantModel() {
    this.applicant.userID = this.applicantForm.value.userID;
    this.applicant.applicantID = this.applicantForm.value.applicantID;
    this.applicant.firstName = this.applicantForm.value.firstName;
    this.applicant.lastName = this.applicantForm.value.lastName;
    this.applicant.lastDesignation = this.applicantForm.value.lastDesignation;
    this.applicant.lastEmployer = this.applicantForm.value.lastEmployer;
    this.applicant.appliedFor = this.applicantForm.value.appliedFor;
    this.applicant.referedBy = this.applicantForm.value.referedBy;
    this.applicant.noticePeriod = this.applicantForm.value.noticePeriod;
    this.applicant.resume = this.applicantForm.value.resume;
  }
}
