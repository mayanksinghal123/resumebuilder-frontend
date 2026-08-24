import { useFieldArray, useFormContext } from "react-hook-form";
import type { GenerateResumeInput } from "@resume-app/shared";
import EditableText from "../../../EditableText/EditableText";
import EditableTextController from "../../../EditableTextController/EditableTextController";
import EditableHoverCard from "../../../EditableHoverCard/EditableHoverCard";
import EmptySection from "../../../EmptySection/EmptySection";
import AddRowButton from "../../../AddRowButton/AddRowButton";
export default function WorkExperienceSection() {
  const { control } = useFormContext<GenerateResumeInput>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });
  const add = () =>
    append({
      company: "Tech Company",
      role: "Software Engineer",
      location: "San Francisco, CA",
      dates: "2022 - Present",
      description:
        "Working on developing and maintaining web applications using React and Node.js.",
    });
  if (!fields.length)
    return <EmptySection label="Add Work Experience" onClick={add} />;
  return (
    <section className="space-y-1">
      <EditableText value="WORK EXPERIENCE" fontSize={11} fontWeight={700} />
      <div className="space-y-1">
        {fields.map((field, index) => (
          <EditableHoverCard key={field.id} onDelete={() => remove(index)}>
            <div className="flex flex-col">
              <EditableTextController
                control={control}
                name={`experiences.${index}.date`}
                fontSize={11}
                fontStyle="italic"
              />
              <div className="flex flex-wrap items-center gap-1">
                <EditableTextController
                  control={control}
                  name={`experiences.${index}.role`}
                  fontSize={10}
                  fontWeight={700}
                />
                <span>|</span>
                <EditableTextController
                  control={control}
                  name={`experiences.${index}.company`}
                  fontSize={10}
                  fontWeight={700}
                />
                <span>|</span>
                <EditableTextController
                  control={control}
                  name={`experiences.${index}.location`}
                  fontSize={10}
                  fontStyle="italic"
                />
              </div>
            </div>
          </EditableHoverCard>
        ))}
      </div>
      <AddRowButton label="Add More Experience" onClick={add} />
    </section>
  );
}
