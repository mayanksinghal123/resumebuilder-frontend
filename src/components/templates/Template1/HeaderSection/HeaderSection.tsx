import { useFormContext } from "react-hook-form";
import type { GenerateResumeInput } from "@resume-app/shared";
import EditableTextController from "../../../EditableTextController/EditableTextController";
export default function HeaderSection() {
  const { control } = useFormContext<GenerateResumeInput>();
  return (
    <header className="flex flex-col items-center gap-1 border-b-2 border-slate-800 pb-4 text-center">
      <EditableTextController
        control={control}
        name="name"
        fontSize={24}
        fontWeight="bold"
        maxWidth="200mm"
      />
      <EditableTextController
        control={control}
        name="title1"
        fontSize={16}
        maxWidth="200mm"
      />
      <EditableTextController
        control={control}
        name="title2"
        fontSize={14}
        fontStyle="italic"
        maxWidth="200mm"
      />
    </header>
  );
}
