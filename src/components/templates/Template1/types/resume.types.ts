export interface SkillItem {
  category: string;
  item: string;
}

export interface GenerateResumeInput {
  name: string;
  title1?: string;
  title2?: string;
  summary?: string;
  phone?: string;
  email?: string;
  skills: SkillItem[];
}