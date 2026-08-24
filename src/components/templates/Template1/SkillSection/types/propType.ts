export interface SkillItem {
  id: number;
  category: string;
  value: string;
}

export const initialSkills: SkillItem[] = [
  {
    id: 1,
    category: "Frontend",
    value: "React, TypeScript, JavaScript, HTML, CSS",
  },
  {
    id: 2,
    category: "State Management",
    value: "Redux, Zustand, React Query, Context API",
  },
];
