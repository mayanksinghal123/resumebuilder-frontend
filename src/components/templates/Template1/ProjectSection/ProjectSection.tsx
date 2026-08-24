import { useFieldArray, useFormContext } from "react-hook-form";
import type { GenerateResumeInput } from "@resume-app/shared";
import EditableText from "../../../EditableText/EditableText";
import ProjectCard from "./ProjectCard/ProjectCard";
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
    <section className="space-y-2">
      <EditableText value="KEY PROJECTS" fontSize={20} fontWeight={700} />
      <div className="space-y-2">
        {fields.map((field, index) => (
          <ProjectCard
            key={field.id}
            index={index}
            onDelete={() => remove(index)}
          />
        ))}
      </div>
      <AddRowButton label="Add More Projects" onClick={add} />
    </section>
  );
}
