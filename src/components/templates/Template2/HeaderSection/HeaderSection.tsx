import { Box } from "@mui/material";

import { useFormContext } from "react-hook-form";
import type { GenerateResumeInput } from "@resume-app/shared";
import EditableTextController from "../../../EditableTextController/EditableTextController";

const HeaderSection = () => {
  const { control } = useFormContext<GenerateResumeInput>();

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <EditableTextController
        control={control}
        name="name"
        fontSize={24}
        fontWeight="bold"
        fullWidth
        multiline
        // sx={{
        //   textAlign: "center",
        // }}
      />
    </Box>
  );
};

export default HeaderSection;
