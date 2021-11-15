import { Injectable } from '@angular/core';
import { ApiAction } from '../action/api-action';


@Injectable({
  providedIn: 'root'
})

export class ApiEndpointService {

  constructor(private path: ApiAction) { }

  public getApplicantEndPoint = (): string => 
  this.createUrl(this.path.GetApplicantById);

  public promoteApplicant = (): string =>
  this.createUrl(this.path.PromoteApplicant);

  public addApplicant = (): string =>
  this.createUrl(this.path.AddApplicant);

  public getDesignation = (): string =>
  this.createUrl(this.path.GetDesignation);

  public getUser = (): string =>
  this.createUrl(this.path.GetUser);

private createUrl = (action: string): string => {
  return this.path.base_URL + action;
};
}
