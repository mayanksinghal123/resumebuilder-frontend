import { Box } from "@mui/material";

import type { GenerateResumeInput } from "@resume-app/shared";

import { useFieldArray, useFormContext } from "react-hook-form";

import EditableHoverCard from "../../../EditableHoverCard/EditableHoverCard";
import EditableText from "../../../EditableText/EditableText";
import EditableTextController from "../../../EditableTextController/EditableTextController";
import AddRowButton from "../../../AddRowButton/AddRowButton";
import EmptySection from "../../../EmptySection/EmptySection";

const EducationSection = () => {
  const { control } = useFormContext<GenerateResumeInput>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations",
  });

  if (fields.length === 0) {
    return (
      <EmptySection
        label="Add Education"
        onClick={() =>
          append({
            school: "University of Technology",
            date: "2014 - 2018",
          })
        }
      />
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {/* Section Title */}
      <EditableText
        value="EDUCATION"
        fontSize={11}
        fontWeight={700}
      />

      {/* Education List */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {fields.map((field, index) => (
          <EditableHoverCard key={field.id} onDelete={() => remove(index)}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              {/* Date */}
              <EditableTextController
                control={control}
                name={`educations.${index}.date`}
                fontSize={10}
              />

              {/* Degree */}
              <EditableTextController
                control={control}
                name={`educations.${index}.degree`}
                fontSize={10}
                fontWeight={700}
                color={(theme) => theme.documentColors.black}
              />

              {/* School */}
              <EditableTextController
                control={control}
                name={`educations.${index}.school`}
                fontSize={10}
                color={(theme) => theme.documentColors.lighBlack}
              />
            </Box>
          </EditableHoverCard>
        ))}
      </Box>

      {/* Add Education */}
      <AddRowButton
        label="Add Education"
        onClick={() =>
          append({
            school: "University of Technology",
            date: "2014 - 2018",
          })
        }
      />
    </Box>
  );
};

export default EducationSection;
