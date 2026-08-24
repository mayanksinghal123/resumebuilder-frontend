import { Stack, Box } from "@mui/material";
import A4Paper from "../../Layouts/A4Paper";
import HeaderSection from "./HeaderSection/HeaderSection";
import EducationSection from "./EducationSection/EducationSection";
import WorkExperienceSection from "./WorkExperienceSection/WorkExperienceSection";
import ProjectsSection from "./ProjectSection/ProjectSection";
import ContactSection from "./ContactSection/ContactSection";
import SkillsSection from "./SkillSection/SkillSection";

const Template2: React.FC = () => {
  return (
    <A4Paper
      sx={{
        padding: 0,
      }}
    >
      <Stack direction="row" sx={{ width: "100%", minHeight: "297mm" }}>
        {/* Left column - 57mm */}
        <Box
          sx={[
            (theme) => ({
              width: "57mm",
              flexShrink: 0,
              background: theme.documentColors.template2.leftBg,
            }),
          ]}
          display="flex"
          flexDirection="column"
          gap={1}
        >
          <ContactSection />
          <SkillsSection />
        </Box>

        {/* Right column - remaining space */}
        <Box sx={{ flex: 1, padding: 2 }}>
          <HeaderSection />
          <EducationSection />
          <WorkExperienceSection />
          <ProjectsSection/>
        </Box>
      </Stack>
    </A4Paper>
  );
};

export default Template2;
