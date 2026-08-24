import { useFieldArray, useFormContext } from "react-hook-form";
import type { GenerateResumeInput } from "@resume-app/shared";
import EditableText from "../../../EditableText/EditableText";
import EditableTextController from "../../../EditableTextController/EditableTextController";
import EditableHoverCard from "../../../EditableHoverCard/EditableHoverCard";
import EmptySection from "../../../EmptySection/EmptySection";
import AddRowButton from "../../../AddRowButton/AddRowButton";
export default function SkillsSection() { const { control } = useFormContext<GenerateResumeInput>(); const { fields, append, remove } = useFieldArray({ control, name: "skills" }); const add = () => append({ category: "New Category", item: "Add skills here" }); if (!fields.length) return <EmptySection label="Add Skills" onClick={add} />; return <section className="space-y-2 px-5 pt-3"><EditableText value="SKILLS" fontSize={11} fontWeight={700} color="#fff" /><div className="space-y-1">{fields.map((field, index) => <EditableHoverCard key={field.id} onDelete={() => remove(index)}><div className="flex gap-1 text-sm"><span>•</span><EditableTextController control={control} name={`skills.${index}.item`} fullWidth multiline fontSize={10} color="#fff" /></div></EditableHoverCard>)}</div><AddRowButton label="Add More Skills" onClick={add} /></section>; }
