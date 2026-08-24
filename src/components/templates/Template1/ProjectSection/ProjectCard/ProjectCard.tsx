import { Box, Button, Typography } from "@mui/material";
import type { GenerateResumeInput } from "@resume-app/shared";
import { useFieldArray, useFormContext } from "react-hook-form";
import type { ProjectCardProps } from "./projectCard.types";
import EditableHoverCard from "../../../../EditableHoverCard/EditableHoverCard";
import EditableTextController from "../../../../EditableTextController/EditableTextController";
import EditableText from "../../../../EditableText/EditableText";

const ProjectCard = ({ index, onDelete }: ProjectCardProps) => {
  const { control } = useFormContext<GenerateResumeInput>();

  const descriptionFieldArray = useFieldArray({
    control,
    name: `projects.${index}.description`,
  });

  return (
    <EditableHoverCard
      onDelete={onDelete}
      sx={{ p: 1.5, display: "flex", flexDirection: "column", gap: 1.5 }}
    >
      {/* Top Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 2,
        }}
      >
        <EditableTextController
          control={control}
          name={`projects.${index}.title`}
          fontSize={18}
          fontWeight={700}
        />
        <EditableTextController
          control={control}
          name={`projects.${index}.date`}
          fontSize={14}
          fontStyle="italic"
        />
      </Box>

      {/* Technology */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 1 }}>
          <EditableText value="Technology" fontWeight={700} fontSize={14} />
          <EditableTextController
            control={control}
            name={`projects.${index}.technology`}
            fontStyle="italic"
            fontSize={15}
            fullWidth
            multiline
          />
        </Box>

        {/* Description */}
        <Box sx={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 1 }}>
          <EditableText value="Description" fontWeight={700} fontSize={14} />

          <Box sx={{ display: "flex", flexDirection: "column"}}>
            {descriptionFieldArray.fields.map((field, descIndex) => (
              <Box
                key={field.id}
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              >
                <Typography sx={{ lineHeight: "28px" }}>•</Typography>

                <EditableHoverCard
                  onDelete={() => descriptionFieldArray.remove(descIndex)}
                  sx={{ flex: 1}}
                >
                  <EditableTextController
                    control={control}
                    name={`projects.${index}.description.${descIndex}.name`}
                    fullWidth
                    multiline
                    fontSize={15}
                  />
                </EditableHoverCard>
              </Box>
            ))}

            <Button
              size="small"
              variant="text"
              sx={{ alignSelf: "flex-start" }}
              onClick={() => descriptionFieldArray.append({ name: "" })}
            >
              + Description
            </Button>
          </Box>
        </Box>
      </Box>
    </EditableHoverCard>
  );
};

export default ProjectCard;
