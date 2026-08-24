import { Box } from "@mui/material";

import { useFormContext } from "react-hook-form";
import type { GenerateResumeInput } from "@resume-app/shared";
import EditableTextController from "../../../EditableTextController/EditableTextController";

const HeaderSection = () => {
  const { control } = useFormContext<GenerateResumeInput>();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <EditableTextController
        control={control}
        name="name"
        fontSize={24}
        fontWeight="bold"
        maxWidth={'200mm'}
        sx={{
          textAlign: "center",
        }}
      />

      <EditableTextController
        control={control}
        name="title1"
        fontSize={16}
        fontWeight={500}
         maxWidth={'200mm'}
        sx={{
          textAlign: "center",
        }}
      />

      <EditableTextController
        control={control}
        name="title2"
        fontSize={14}
        fontStyle="italic"
         maxWidth={'200mm'}
        sx={{
          textAlign: "center",
        }}
      />
    </Box>
  );
};

export default HeaderSection;
