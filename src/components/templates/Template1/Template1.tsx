import A4Paper from "../../Layouts/A4Paper";
import HeaderSection from "./HeaderSection/HeaderSection";
import SkillsSection from "./SkillSection/SkillSection";
import WorkExperienceSection from "./WorkExperienceSection/WorkExperienceSection";
import ProjectsSection from "./ProjectSection/ProjectSection";
import EducationSection from "./EducationSection/EducationSection";
export default function Template1() {
  return (
    <div className="origin-top scale-[.92]">
      <A4Paper>
        <div className="space-y-5 text-slate-900">
          <HeaderSection />
          <SkillsSection />
          <WorkExperienceSection />
          <ProjectsSection />
          <EducationSection />
        </div>
      </A4Paper>
    </div>
  );
}
