import { useQuery } from "@tanstack/react-query";
import { ResumeService } from "../api/services/resume.service";

export const useTemplate = () => {
  return useQuery({
    queryKey: ["templates"],
    queryFn: ResumeService.getTemplates,
  });
};
