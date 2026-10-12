import { useFieldArray, useFormContext } from "react-hook-form";

import type { GenerateResumeInput } from "@resume-app/shared";

import AddRowButton from "../../../AddRowButton/AddRowButton";
import EditableHoverCard from "../../../EditableHoverCard/EditableHoverCard";
import EditableText from "../../../EditableText/EditableText";
import EditableTextController from "../../../EditableTextController/EditableTextController";
import EmptySection from "../../../EmptySection/EmptySection";

export default function ProjectsSection() {
  const { control } = useFormContext<GenerateResumeInput>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  const add = () => {
    append({
      title: "Personal Portfolio",
      date: "2023",
      technology: "React, TypeScript, CSS",
      description: [
        {
          name: "Designed and developed a personal portfolio website.",
        },
      ],
    });
  };

  if (!fields.length) {
    return <EmptySection label="Add Projects" onClick={add} />;
  }

  return (
    <section className="space-y-1">
      <EditableText value="KEY PROJECTS" className="text-[11px] font-bold" />

      <div className="space-y-1">
        {fields.map((field, index) => (
          <EditableHoverCard key={field.id} onDelete={() => remove(index)}>
            <div className="flex flex-col">
              <EditableTextController
                control={control}
                name={`projects.${index}.title`}
                className="text-[10px] font-bold"
              />

              <EditableTextController
                control={control}
                name={`projects.${index}.date`}
                className="text-[10px] italic"
              />

              <EditableTextController
                control={control}
                name={`projects.${index}.description.0.name`}
                fullWidth
                multiline
                className="text-[10px]"
              />
            </div>
          </EditableHoverCard>
        ))}
      </div>

      <AddRowButton label="Add More Projects" onClick={add} />
    </section>
  );
}
