export interface Card{
    CandiateId: number;
    Name: string;
    CreatedOn: Date;
    AppliedFor: string;
    CurrentRound: number;
    Interview: {InterviewerID: number, InterviewerName: string}[];
}