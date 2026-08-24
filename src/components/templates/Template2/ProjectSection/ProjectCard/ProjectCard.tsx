import { Box } from "@mui/material";
import type { GenerateResumeInput } from "@resume-app/shared";
import { useFormContext } from "react-hook-form";
import type { ProjectCardProps } from "./projectCard.types";
import EditableHoverCard from "../../../../EditableHoverCard/EditableHoverCard";
import EditableTextController from "../../../../EditableTextController/EditableTextController";
import EditableText from "../../../../EditableText/EditableText";

const ProjectCard = ({ index, onDelete }: ProjectCardProps) => {
  const { control } = useFormContext<GenerateResumeInput>();

  return (
    <EditableHoverCard
      onDelete={onDelete}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.3,
        py: 0.5,
      }}
    >
      {/* Top Row */}
      <EditableText
        value="Project Name"
        fontSize={10}
        fontWeight={700}
        sx={{ padding: 0, margin: 0 }}
      />

      <EditableTextController
        control={control}
        name={`projects.${index}.title`}
        fontSize={10}
        fontWeight={700}
        sx={{ padding: 0, margin: 0 }}
      />

      <EditableText
        value="Duration"
        fontSize={10}
        fontWeight={700}
        sx={{ padding: 0, margin: 0 }}
      />

      <EditableTextController
        control={control}
        name={`projects.${index}.date`}
        fontSize={10}
        fontStyle="italic"
      />

      <EditableText value="Description" fontWeight={700} fontSize={10} />
      <EditableTextController
        control={control}
        name={`projects.${index}.description.0.name`}
        fullWidth
        multiline
        fontSize={10}
        sx={{padding: 0, margin: 0 }}
      />
    </EditableHoverCard>
  );
};

export default ProjectCard;
