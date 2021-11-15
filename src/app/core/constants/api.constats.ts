import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiConstants {
  public readonly BASE_URL: string = 'https://localhost:5001/';
  public readonly GET_ALL_APPLICANT = 'admin/getallcandidate';
  public readonly EDIT_APPLICANT = 'admin/editcandidate';
  public readonly REJECT_APPLICANT = 'admin/rejectcandidate';
  public readonly ADD_INTERVIEWER = 'admin/addinterviewer';
  public readonly SCHEDULE_INTERVIEWER = 'admin/scheduleInterviewer';
}
