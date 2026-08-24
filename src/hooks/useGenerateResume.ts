// src/hooks/useGenerateResume.ts
import { useMutation } from '@tanstack/react-query';
import { ResumeService } from '../api/services/resume.service';
import type { GenerateResumeInput } from "@resume-app/shared";

export const useGenerateResume = () => {
  return useMutation({
    mutationFn: (resumeData: GenerateResumeInput) => ResumeService.generate(resumeData),
    onSuccess: (blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Resume.docx');
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    },
    onError: async (error: any) => {
      let errorMessage = 'Could not generate resume.';

      // Check if the error response is a Blob
      if (error.response?.data instanceof Blob) {
        try {
          // Convert Blob to text
          const errorText = await error.response.data.text();
          console.log("error__",errorText)
          // Parse the text back into JSON
          const errorJson = JSON.parse(errorText);
          errorMessage = errorJson.message || errorMessage;
        } catch (e) {
          console.error("Failed to parse error blob", e);
        }
      } else if (error.response?.data?.message) {
        // Handle cases where it might already be JSON (fallback)
        errorMessage = error.response.data.message;
      }

      console.error('Download failed:', error);
      alert(errorMessage); // Now shows the actual message from your Backend!
    }
  });
};