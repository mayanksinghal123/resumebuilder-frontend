import { useFormContext } from "react-hook-form";
import type { GenerateResumeInput } from "@resume-app/shared";
import EditableTextController from "../../../EditableTextController/EditableTextController";
export default function HeaderSection() { const { control } = useFormContext<GenerateResumeInput>(); return <header className="border-b border-slate-200 pb-2"><EditableTextController control={control} name="name" fontSize={24} fontWeight="bold" fullWidth multiline /></header>; }
