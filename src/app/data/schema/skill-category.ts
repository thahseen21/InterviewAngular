import { Skill } from './skill';

export interface SkillCategory {
  skillCategoryId: number;
  skillName: string;
  skill: Skill[];
}
