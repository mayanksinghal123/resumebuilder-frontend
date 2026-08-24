import { Box, Stack } from "@mui/material";

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
    <Stack spacing={1.5}>
      {/* Section Title */}
      <EditableText
        value="SKILLS"
        onChange={() => {}}
        fontSize={20}
        fontWeight={700}
      />

      {/* Skills Table */}
      <Stack spacing={1}>
        {fields.map((field, index) => (
          <EditableHoverCard
            key={field.id}
            onDelete={() => remove(index)}
            sx={{
              display: "grid",
              gridTemplateColumns: "220px 1fr",
              alignItems: "stretch",
            }}
          >
            {/* Category */}
            <Box
              sx={{
                pr: 1,
              }}
            >
              <EditableTextController
                control={control}
                name={`skills.${index}.category`}
                fontWeight={600}
                fontSize={14}
                fullWidth
                multiline
              />
            </Box>

            {/* Items */}
            <Box
              sx={{
                pl: 1,
              }}
            >
              <EditableTextController
                control={control}
                name={`skills.${index}.item`}
                fontSize={14}
                fullWidth
                multiline
              />
            </Box>
          </EditableHoverCard>
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
    </Stack>
  );
};

export default SkillsSection;
