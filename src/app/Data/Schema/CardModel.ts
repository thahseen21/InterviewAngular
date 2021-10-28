export interface Card{
    CandiateId: number;
    Name: string;
    CreatedOn: Date;
    AppliedFor: string;
    CurrentRound: number;
    InterviewDate: Date;
    Interview: {InterviewerID: number, InterviewerName: string}[];
}