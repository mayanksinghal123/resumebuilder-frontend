import type { UseFormReturn } from "react-hook-form";
import type { GenerateResumeInput } from "@resume-app/shared";
import { useGenerateResume } from "../../../hooks/useGenerateResume";
export default function useResumeGenerator(
  methods: UseFormReturn<GenerateResumeInput>,
) {
  const { mutateAsync, isPending } = useGenerateResume();
  const handleGenerate = methods.handleSubmit((data) => mutateAsync(data));
  return { handleGenerate, isPending };
}
