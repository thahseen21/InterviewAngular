export class Card{
    CandiateId: number=0;
    Name: string = '';
    CreatedOn: Date = new Date;
    AppliedFor: string = '';
    CurrentRound: number = 2;
    Interview: {InterviewerID: number, InterviewerName: string}[] = [];
}