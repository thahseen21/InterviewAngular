import { interviewDetail } from './interview-detail';

export interface ApplicantDetail {
  applicantId: number;
  name: string;
  lastEmployer: string;
  designation: string;
  appliedFor: string;
  referredBy: string;
  medicalStatus: string;
  noticePeriod: number;
  resume: string;
  interviewDetails: interviewDetail[];
}
