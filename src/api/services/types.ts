import type { TemplateKey } from "../../components/templates/templateRegistery";

export interface ResumeTemplate {
  id: string;
  key: TemplateKey;
  name: string;
  thumbnail_url: string;
  is_active: boolean;
  created_at: string;
}

export interface GetTemplatesResponse {
  success: boolean;
  templates: ResumeTemplate[];
}
