import Template1 from "./Template1/Template1";
import Template2 from "./Template2/Template2";

export const templateRegistry = {
  "creative-designer": Template1,
  "ats-classic": Template2,
  "modern-professional": Template2,
} as const;

export type TemplateKey = keyof typeof templateRegistry;