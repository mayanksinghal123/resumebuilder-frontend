import { Box, Stack, Typography } from "@mui/material";

import { useFieldArray, useFormContext } from "react-hook-form";

import type { GenerateResumeInput } from "@resume-app/shared";

import EditableTextController from "../../../EditableTextController/EditableTextController";
import EditableText from "../../../EditableText/EditableText";
import EditableHoverCard from "../../../EditableHoverCard/EditableHoverCard";
import EmptySection from "../../../EmptySection/EmptySection";
import AddRowButton from "../../../AddRowButton/AddRowButton";

const SkillsSection = () => {
  const { control } = useFormContext<GenerateResumeInput>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  if (fields.length === 0) {
    return (
      <EmptySection
        label="Add Skills"
        onClick={() =>
          append({ category: "New Category", item: "Add skills here" })
        }
      />
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, px: 2.5 }}>
      {/* Section Title */}
      <EditableText
        value="SKILLS"
        fontSize={11}
        fontWeight={700}
        sx={{ color: (theme) => theme.documentColors.white }}
      />

      {/* Skills Table */}
      <Stack pl={1}>
        {fields.map((field, index) => (
          <Box
            key={field.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "10px",
                color: (theme) => theme.documentColors.white,
              }}
            >
              •
            </Typography>

            <EditableHoverCard
              onDelete={() => remove(index)}
              sx={{ flex: 1, margin: "0px" }}
            >
              <EditableTextController
                control={control}
                name={`skills.${index}.item`}
                fullWidth
                multiline
                fontSize={10}
                placeholderColor={(theme) => {
                  return theme.documentColors.black;
                }}
                normalColor={(theme) => {
                  return theme.documentColors.white;
                }}
                focusedColor={(theme) => {
                  return theme.documentColors.black;
                }}
              />
            </EditableHoverCard>
          </Box>
        ))}
      </Stack>

      {/* Add */}
      <AddRowButton
        label="Add More Skills"
        onClick={() =>
          append({
            category: "New Category",
            item: "Add skills here",
          })
        }
      />
    </Box>
  );
};

export default SkillsSection;
