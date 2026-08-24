import type { UseFormReturn } from "react-hook-form";

import type { GenerateResumeInput } from "@resume-app/shared";
import { useGenerateResume } from "../../../hooks/useGenerateResume";

const useResumeGenerator = (methods: UseFormReturn<GenerateResumeInput>) => {
  const { mutate, isPending } = useGenerateResume();

  const handleGenerate = methods.handleSubmit((data) => {
    console.log("Form Data:", data); // Debug log to check form data
    mutate(data);
  });

  return {
    handleGenerate,
    isPending,
  };
};

export default useResumeGenerator;
