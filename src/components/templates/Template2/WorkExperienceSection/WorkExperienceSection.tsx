import { useFieldArray, useFormContext } from "react-hook-form";

import type { GenerateResumeInput } from "@resume-app/shared";

import AddRowButton from "../../../AddRowButton/AddRowButton";
import EditableHoverCard from "../../../EditableHoverCard/EditableHoverCard";
import EditableText from "../../../EditableText/EditableText";
import EditableTextController from "../../../EditableTextController/EditableTextController";
import EmptySection from "../../../EmptySection/EmptySection";

export default function WorkExperienceSection() {
  const { control } = useFormContext<GenerateResumeInput>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  const add = () => {
    append({
      company: "Tech Company",
      role: "Software Engineer",
      location: "San Francisco, CA",
      dates: "2022 - Present",
      description:
        "Working on developing and maintaining web applications using React and Node.js.",
    });
  };

  if (!fields.length) {
    return <EmptySection label="Add Work Experience" onClick={add} />;
  }

  return (
    <section className="space-y-1">
      <EditableText
        value="WORK EXPERIENCE"
        className="text-[11px] font-bold"
      />

      <div className="space-y-1">
        {fields.map((field, index) => (
          <EditableHoverCard
            key={field.id}
            onDelete={() => remove(index)}
          >
            <div className="flex flex-col">
              <EditableTextController
                control={control}
                name={`experiences.${index}.dates`}
                className="text-[11px] italic"
              />

              <div className="flex w-full items-center gap-1">
                <EditableTextController
                  control={control}
                  name={`experiences.${index}.role`}
                  className="min-w-0 flex-1 text-[10px] font-bold"
                />

                <span className="shrink-0 text-[10px]">|</span>

                <EditableTextController
                  control={control}
                  name={`experiences.${index}.company`}
                  className="min-w-0 flex-1 text-[10px] font-bold"
                />

                <span className="shrink-0 text-[10px]">|</span>

                <EditableTextController
                  control={control}
                  name={`experiences.${index}.location`}
                  className="min-w-0 flex-1 text-[10px] italic"
                />
              </div>
            </div>
          </EditableHoverCard>
        ))}
      </div>

      <AddRowButton
        label="Add More Experience"
        onClick={add}
      />
    </section>
  );
}