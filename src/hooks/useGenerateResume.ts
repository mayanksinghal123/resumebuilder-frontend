import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { ResumeService } from "../api/services/resume.service";
import type { GenerateResumeInput } from "@resume-app/shared";
interface ErrorPayload {
  message?: string;
}
export const useGenerateResume = () =>
  useMutation({
    mutationFn: (resumeData: GenerateResumeInput) =>
      ResumeService.generate(resumeData),
    onSuccess: (blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.download = "Resume.docx";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    },
    onError: async (error: AxiosError<ErrorPayload | Blob>) => {
      let message = "Could not generate resume.";
      const data = error.response?.data;
      if (data instanceof Blob) {
        try {
          const parsed = JSON.parse(await data.text()) as ErrorPayload;
          message = parsed.message ?? message;
        } catch {
          message = "Could not generate resume.";
        }
      } else if (data?.message) message = data.message;
      window.alert(message);
    },
  });
