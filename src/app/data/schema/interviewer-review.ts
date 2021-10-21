import { SkillCategory } from './skill-category';

export interface InterviewerReview {
  interviewerId: number;
  reviewId: number;
  pros: string;
  cons: string;
  comments: string;
  status: number;
  totalSkill: SkillCategory[];
}
