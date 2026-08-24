declare module "@resume-app/shared" {
  export interface GenerateResumeInput {
    name: string;
    title1?: string;
    title2?: string;
    summary?: string;
    phone?: string;
    email?: string;
    skills: Array<{ category: string; item: string }>;
    experiences?: Array<{
      company: string;
      role: string;
      location?: string;
      dates?: string;
      date?: string;
      description?: string;
    }>;
    projects?: Array<{
      title: string;
      date?: string;
      technology?: string;
      description?: Array<{ name: string }>;
    }>;
    educations?: Array<{ school: string; date?: string; degree?: string }>;
  }
}
