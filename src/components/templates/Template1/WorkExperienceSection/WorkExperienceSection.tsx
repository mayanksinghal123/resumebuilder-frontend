import { useFieldArray, useFormContext } from "react-hook-form";
import type { GenerateResumeInput } from "@resume-app/shared";
import EditableTextController from "../../../EditableTextController/EditableTextController";
import EditableText from "../../../EditableText/EditableText";
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
    <section className="space-y-2">
      <EditableText value="WORK EXPERIENCE" fontSize={20} fontWeight={700} />
      <div className="space-y-2">
        {fields.map((field, index) => (
          <EditableHoverCard
            key={field.id}
            onDelete={() => remove(index)}
            className="space-y-1"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <EditableTextController
                  control={control}
                  name={`experiences.${index}.company`}
                  fontSize={16}
                  fontWeight={700}
                />
                <span>|</span>
                <EditableTextController
                  control={control}
                  name={`experiences.${index}.role`}
                  fontSize={16}
                  fontWeight={700}
                />
                <span>|</span>
                <EditableTextController
                  control={control}
                  name={`experiences.${index}.location`}
                  fontSize={16}
                  fontStyle="italic"
                />
              </div>
              <EditableTextController
                control={control}
                name={`experiences.${index}.dates`}
                fontSize={14}
                fontStyle="italic"
              />
            </div>
            <EditableTextController
              control={control}
              name={`experiences.${index}.description`}
              fullWidth
              multiline
              fontSize={15}
            />
          </EditableHoverCard>
        ))}
      </div>
      <AddRowButton label="Add More Experience" onClick={add} />
    </section>
  );
}
