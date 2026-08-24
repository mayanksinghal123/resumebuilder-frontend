import { useFormContext } from "react-hook-form";
import type { GenerateResumeInput } from "@resume-app/shared";
import EditableText from "../../../EditableText/EditableText";
import EditableTextController from "../../../EditableTextController/EditableTextController";
export default function ContactSection() { const { control } = useFormContext<GenerateResumeInput>(); return <section className="space-y-1 px-5 pt-5"><EditableText value="CONTACT" fontSize={11} fontWeight={700} color="#fff" /><EditableTextController control={control} name="phone" fontSize={11} fontStyle="italic" color="#fff" /><EditableTextController control={control} name="email" fontSize={11} fontStyle="italic" color="#fff" /></section>; }
