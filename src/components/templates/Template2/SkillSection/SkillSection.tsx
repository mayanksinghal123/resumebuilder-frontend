import { useFieldArray, useFormContext } from "react-hook-form";

import type { GenerateResumeInput } from "@resume-app/shared";

import AddRowButton from "../../../AddRowButton/AddRowButton";
import EditableHoverCard from "../../../EditableHoverCard/EditableHoverCard";
import EditableText from "../../../EditableText/EditableText";
import EditableTextController from "../../../EditableTextController/EditableTextController";
import EmptySection from "../../../EmptySection/EmptySection";

interface SkillsSectionProps {
  className?: string;
  titleClassName?: string;
  skillClassName?: string;
  bulletClassName?: string;
}

export default function SkillsSection({
  className = "",
  titleClassName = "text-[11px] font-bold",
  skillClassName = "text-[10px]",
  bulletClassName = "",
}: SkillsSectionProps) {
  const { control } = useFormContext<GenerateResumeInput>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const add = () => {
    append({
      category: "New Category",
      item: "Add skills here",
    });
  };

  if (!fields.length) {
    return <EmptySection label="Add Skills" onClick={add} />;
  }

  return (
    <section className={`space-y-2 px-5 pt-3 ${className}`}>
      <EditableText value="SKILLS" className={titleClassName} />

      <div className="space-y-1">
        {fields.map((field, index) => (
          <EditableHoverCard key={field.id} onDelete={() => remove(index)}>
            <div className="flex gap-1 text-sm">
              <span className={`shrink-0 ${bulletClassName}`}>•</span>

              <EditableTextController
                control={control}
                name={`skills.${index}.item`}
                fullWidth
                multiline
                className={skillClassName}
              />
            </div>
          </EditableHoverCard>
        ))}
      </div>

      <AddRowButton label="Add More Skills" onClick={add} />
    </section>
  );
}
