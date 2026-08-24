import { Box } from "@mui/material";
import EditableText from "../../../EditableText/EditableText";
import { useFormContext } from "react-hook-form";
import type { GenerateResumeInput } from "../../Template1/types/resume.types";
import EditableTextController from "../../../EditableTextController/EditableTextController";

const ContactSection = () => {
  const { control } = useFormContext<GenerateResumeInput>();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, px: 2.5, pt: 2.5 }}>
      <EditableText
        value="CONTACT"
        fontSize={11}
        fontWeight={700}
        sx={[
          (theme) => ({
            color: theme.palette.text.white,
          }),
        ]}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <EditableTextController
          control={control}
          name={"phone"}
          fontSize={11}
          fontStyle="italic"
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
        <EditableTextController
          control={control}
          name={"email"}
          fontSize={11}
          fontStyle="italic"
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
      </Box>
    </Box>
  );
};

export default ContactSection;
