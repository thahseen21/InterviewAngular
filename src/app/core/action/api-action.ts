import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ApiAction {
    public readonly base_URL = 'https://localhost:44392/api/';

    public readonly GetApplicantById = 'Admin/GetApplicantById'
    public readonly AddApplicant = 'Admin/AddApplicant';
    public readonly PromoteApplicant = 'Admin/PromoteApplicant';
    public readonly GetDesignation = 'Admin/GetAllDesignation';
    public readonly GetUser = 'Admin/GetAllUser';
}
