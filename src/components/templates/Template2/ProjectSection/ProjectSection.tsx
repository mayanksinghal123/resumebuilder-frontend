import { Box } from "@mui/material";
import type { GenerateResumeInput } from "@resume-app/shared";
import { useFieldArray, useFormContext } from "react-hook-form";
import EditableText from "../../../EditableText/EditableText";
import ProjectCard from "./ProjectCard/ProjectCard";
import EmptySection from "../../../EmptySection/EmptySection";
import AddRowButton from "../../../AddRowButton/AddRowButton";

const ProjectsSection = () => {
  const { control } = useFormContext<GenerateResumeInput>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  if (fields.length === 0) {
    return (
      <EmptySection
        label="Add Projects"
        onClick={() =>
          append({
            title: "Personal Portfolio",
            date: "2023",
            technology: "React, TypeScript, CSS",
            description: [
              { name: "Designed and developed a personal portfolio website." },
              { name: "Implemented responsive design." },
            ],
          })
        }
      />
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1}}>
      <EditableText
        value="KEY PROJECTS"
        fontSize={11}
        fontWeight={700}
      />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.3 }}>
        {fields.map((field, index) => (
          <ProjectCard
            key={field.id}
            index={index}
            onDelete={() => remove(index)}
          />
        ))}
      </Box>

      {/* Add Button */}
      <AddRowButton
        label="Add More Projects"
        onClick={() =>
          append({
            title: "Personal Portfolio",
            date: "2023",
            technology: "React, TypeScript, CSS",
            description: [
              { name: "Designed and developed a personal portfolio website." },
              { name: "Implemented responsive design." },
            ],
          })
        }
      />
    </Box>
  );
};

export default ProjectsSection;
