// src/api/services/resume.service.ts

import api from "../axios";
import type { GetTemplatesResponse, ResumeTemplate } from "./types";

export const ResumeService = {
  generate: async (data: unknown) => {
    const response = await api.post("api/resume/generate", data, {
      responseType: "blob",
    });
    return response.data;
  },
  getTemplates: async (): Promise<ResumeTemplate[]> => {
    const response = await api.get<GetTemplatesResponse>(
      "api/resume/templates",
    );

    return response.data.templates;
  },
};
