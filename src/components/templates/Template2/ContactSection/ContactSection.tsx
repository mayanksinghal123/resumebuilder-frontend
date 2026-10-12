import { useFormContext } from "react-hook-form";

import type { GenerateResumeInput } from "@resume-app/shared";

import EditableText from "../../../EditableText/EditableText";
import EditableTextController from "../../../EditableTextController/EditableTextController";

export default function ContactSection() {
  const { control } = useFormContext<GenerateResumeInput>();

  return (
    <section className="space-y-1 px-5 pt-5">
      <EditableText value="CONTACT" className="text-[11px] font-bold" />

      <EditableTextController
        control={control}
        name="phone"
        className="text-[11px] italic"
      />

      <EditableTextController
        control={control}
        name="email"
        className="text-[11px] italic"
      />
    </section>
  );
}
