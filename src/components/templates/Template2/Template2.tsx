import A4Paper from "../../Layouts/A4Paper";

import HeaderSection from "./HeaderSection/HeaderSection";
import ContactSection from "./ContactSection/ContactSection";
import SkillsSection from "./SkillSection/SkillSection";
import WorkExperienceSection from "./WorkExperienceSection/WorkExperienceSection";
import ProjectsSection from "./ProjectSection/ProjectSection";
import EducationSection from "./EducationSection/EducationSection";

export default function Template2() {
  return (
    <A4Paper className="p-0">
      <div className="grid min-h-[297mm] grid-cols-[57mm_1fr] text-slate-900">
        <aside
          className="
            bg-[#01a4c3]
            text-white
            [--editable-hover-text:#ffffff]
            [--editable-hover-border:#ffffff]
            [--editable-hover-bg:rgba(255,255,255,0.12)]
          "
        >
          <ContactSection />

          <SkillsSection
            titleClassName="text-[11px] font-bold"
            skillClassName="text-[10px]"
            bulletClassName="text-white"
          />
        </aside>

        <main
          className="
            space-y-3
            p-5
            text-slate-900
          "
        >
          <HeaderSection />
          <div className="border-[1.5px] border-[#01a4c3]" />
          <EducationSection />
          <div className="border-[1.5px] border-[#01a4c3]" />
          <WorkExperienceSection />
          <div className="border-[1.5px] border-[#01a4c3]" />
          <ProjectsSection />
        </main>
      </div>
    </A4Paper>
  );
}
