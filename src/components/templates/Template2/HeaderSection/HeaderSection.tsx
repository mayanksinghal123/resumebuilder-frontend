import { useFormContext } from "react-hook-form";

import type { GenerateResumeInput } from "@resume-app/shared";

import EditableTextController from "../../../EditableTextController/EditableTextController";

export default function HeaderSection() {
  const { control } = useFormContext<GenerateResumeInput>();

  return (
    <EditableTextController
      control={control}
      name="name"
      className="text-[24px] font-bold"
      fullWidth
      multiline
    />
  );
}
