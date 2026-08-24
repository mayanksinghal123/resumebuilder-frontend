import { useFieldArray, useFormContext } from "react-hook-form";
import type { GenerateResumeInput } from "@resume-app/shared";
import EditableText from "../../../EditableText/EditableText";
import EditableTextController from "../../../EditableTextController/EditableTextController";
import EditableHoverCard from "../../../EditableHoverCard/EditableHoverCard";
import EmptySection from "../../../EmptySection/EmptySection";
import AddRowButton from "../../../AddRowButton/AddRowButton";
export default function EducationSection() {
  const { control } = useFormContext<GenerateResumeInput>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations",
  });
  const add = () =>
    append({ school: "University of Technology", date: "2014 - 2018" });
  if (!fields.length)
    return <EmptySection label="Add Education" onClick={add} />;
  return (
    <section className="space-y-1">
      <EditableText value="EDUCATION" fontSize={11} fontWeight={700} />
      <div className="space-y-1">
        {fields.map((field, index) => (
          <EditableHoverCard key={field.id} onDelete={() => remove(index)}>
            <div className="flex flex-col">
              <EditableTextController
                control={control}
                name={`educations.${index}.date`}
                fontSize={10}
              />
              <EditableTextController
                control={control}
                name={`educations.${index}.school`}
                fontSize={10}
                fontWeight={700}
              />
            </div>
          </EditableHoverCard>
        ))}
      </div>
      <AddRowButton label="Add Education" onClick={add} />
    </section>
  );
}
