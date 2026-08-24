import A4Paper from "../../Layouts/A4Paper";
import HeaderSection from "./HeaderSection/HeaderSection";
import ContactSection from "./ContactSection/ContactSection";
import SkillsSection from "./SkillSection/SkillSection";
import WorkExperienceSection from "./WorkExperienceSection/WorkExperienceSection";
import ProjectsSection from "./ProjectSection/ProjectSection";
import EducationSection from "./EducationSection/EducationSection";
export default function Template2() { return <A4Paper className="p-0"><div className="grid min-h-[297mm] grid-cols-[57mm_1fr] text-slate-900"><aside className="bg-[#01a4c3] text-white"><ContactSection /><SkillsSection /></aside><main className="space-y-3 p-5"><HeaderSection /><EducationSection /><WorkExperienceSection /><ProjectsSection /></main></div></A4Paper>; }
