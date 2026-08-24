import A4Paper from "../../Layouts/A4Paper";
import SkillsSection from "./SkillSection/SkillSection";
import HeaderSection from "./HeaderSection/HeaderSection";
import WorkExperienceSection from "./WorkExperienceSection/WorkExperienceSection";
import ProjectsSection from "./ProjectSection/ProjectSection";
import EducationSection from "./EducationSection/EducationSection";
import { Box } from "@mui/material";

const Template1: React.FC = () => {
  return (
    <Box
      sx={{
        transform: "scale(0.92)",
        transformOrigin: "top center",
      }}
    >
      <A4Paper>
        <HeaderSection />
        <SkillsSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <EducationSection />
      </A4Paper>
    </Box>
  );
};

export default Template1;
