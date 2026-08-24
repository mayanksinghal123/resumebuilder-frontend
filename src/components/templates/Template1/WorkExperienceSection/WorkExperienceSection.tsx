import { Box, Typography } from "@mui/material";
import type { GenerateResumeInput } from "@resume-app/shared";
import { useFieldArray, useFormContext } from "react-hook-form";

import EditableTextController from "../../../EditableTextController/EditableTextController";
import EditableText from "../../../EditableText/EditableText";
import EditableHoverCard from "../../../EditableHoverCard/EditableHoverCard";
import EmptySection from "../../../EmptySection/EmptySection";
import AddRowButton from "../../../AddRowButton/AddRowButton";

const WorkExperienceSection = () => {
  const { control } = useFormContext<GenerateResumeInput>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  if (fields.length === 0) {
    return (
      <EmptySection
        label="Add Work Experience"
        onClick={() =>
          append({
            company: "Tech Company",
            role: "Software Engineer",
            location: "San Francisco, CA",
            dates: "2022 - Present",
            description:
              "Working on developing and maintaining web applications using React and Node.js.",
          })
        }
      />
    );
  }

  return (
    <Box
      sx={{
        gap: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Section Title */}
      <EditableText
        value="WORK EXPERIENCE"
        onChange={() => {}}
        fontSize={20}
        fontWeight={700}
      />

      {/* Experience List */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {fields.map((field, index) => (
          <EditableHoverCard
            key={field.id}
            onDelete={() => remove(index)}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
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
              {/* Left */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 1,
                  flex: 1,
                }}
              >
                {/* Company */}
                <EditableTextController
                  control={control}
                  name={`experiences.${index}.company`}
                  fontSize={16}
                  fontWeight={700}
                  maxWidth={"60mm"}
                />

                {/* Separator */}
                <Typography>|</Typography>

                {/* Role */}
                <EditableTextController
                  control={control}
                  name={`experiences.${index}.role`}
                  fontSize={16}
                  fontWeight={700}
                  maxWidth={"55mm"}
                />

                {/* Separator */}
                <Typography>|</Typography>

                {/* Location */}
                <EditableTextController
                  control={control}
                  name={`experiences.${index}.location`}
                  fontSize={16}
                  fontStyle="italic"
                  maxWidth={"30mm"}
                />
              </Box>

              {/* Right Date */}
              <EditableTextController
                control={control}
                name={`experiences.${index}.dates`}
                fontSize={14}
                fontStyle="italic"
              />
            </Box>

            {/* Description */}
            <EditableTextController
              control={control}
              name={`experiences.${index}.description`}
              fullWidth
              multiline
              fontSize={15}
            />
          </EditableHoverCard>
        ))}
      </Box>

      {/* Add */}
      <AddRowButton
        label="Add More Experience"
        onClick={() =>
          append({
            company: "Tech Company",
            role: "Software Engineer",
            location: "San Francisco, CA",
            dates: "2022 - Present",
            description:
              "Working on developing and maintaining web applications using React and Node.js.",
          })
        }
      />
    </Box>
  );
};

export default WorkExperienceSection;
