import { useFieldArray, useFormContext } from "react-hook-form";
import type { GenerateResumeInput } from "@resume-app/shared";
import EditableText from "../../../EditableText/EditableText";
import EditableTextController from "../../../EditableTextController/EditableTextController";
import EditableHoverCard from "../../../EditableHoverCard/EditableHoverCard";
import EmptySection from "../../../EmptySection/EmptySection";
import AddRowButton from "../../../AddRowButton/AddRowButton";
export default function ProjectsSection() {
  const { control } = useFormContext<GenerateResumeInput>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });
  const add = () =>
    append({
      title: "Personal Portfolio",
      date: "2023",
      technology: "React, TypeScript, CSS",
      description: [
        { name: "Designed and developed a personal portfolio website." },
      ],
    });
  if (!fields.length)
    return <EmptySection label="Add Projects" onClick={add} />;
  return (
    <section className="space-y-1">
      <EditableText value="KEY PROJECTS" fontSize={11} fontWeight={700} />
      <div className="space-y-1">
        {fields.map((field, index) => (
          <EditableHoverCard key={field.id} onDelete={() => remove(index)}>
            <div className="flex flex-col">
              <EditableTextController
                control={control}
                name={`projects.${index}.title`}
                fontSize={10}
                fontWeight={700}
              />
              <EditableTextController
                control={control}
                name={`projects.${index}.date`}
                fontSize={10}
                fontStyle="italic"
              />
              <EditableTextController
                control={control}
                name={`projects.${index}.description.0.name`}
                fullWidth
                multiline
                fontSize={10}
              />
            </div>
          </EditableHoverCard>
        ))}
      </div>
      <AddRowButton label="Add More Projects" onClick={add} />
    </section>
  );
}
