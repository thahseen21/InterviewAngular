import { Injectable } from '@angular/core';
import { ApiConstants } from '../constants/api.constats';

@Injectable({
  providedIn: 'root',
})
export class ApiEndpointService {
  constructor(private path: ApiConstants) {}

  public getAllApplicant = (): string =>
    this.createURL(this.path.GET_ALL_APPLICANT);

  public editApplicant = (): string =>
    this.createURL(this.path.EDIT_APPLICANT);

  public rejectApplicant = (): string =>
    this.createURL(this.path.REJECT_APPLICANT);

  public addInterview = (): string =>
    this.createURL(this.path.ADD_INTERVIEWER);

  public scheduleInterview = (): string =>
    this.createURL(this.path.SCHEDULE_INTERVIEWER);

  private createURL = (action: string): string => {
    return this.path.BASE_URL + action;
  };
}
