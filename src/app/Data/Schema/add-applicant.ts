export interface AddApplicant{
    applicantID: number;
    userID: number;
    firstName: string;
    lastName: string;
    lastEmployer: string;
    lastDesignation: string;
    appliedFor: number;
    referedBy: number;
    medicalStatus: string;
    noticePeriod: number;
    resume: string;
}