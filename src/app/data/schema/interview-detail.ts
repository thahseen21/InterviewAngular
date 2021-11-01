import { InterviewerReview } from './interviewer-review';

export interface interviewDetail {
  interviewId: number;
  interviewRound: number;
  scheduleDate: Date;
  result: string;
  interviewReview: InterviewerReview[];
}
