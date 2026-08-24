import { useState } from "react";
import { Box, Dialog, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ResumeEditor from "../ResumeEditor/ResumeEditor";
import TemplateList from "../../components/TemplateList/TemplateList";

export default function Dashboard() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [templatesOpen, setTemplatesOpen] = useState(false);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflow: "auto",
          p: 2,
        }}
      >
        <ResumeEditor />
      </Box>

      {isDesktop ? (
        <TemplateList />
      ) : (
        <Dialog
          open={templatesOpen}
          onClose={() => setTemplatesOpen(false)}
          fullWidth
          maxWidth="sm"
          PaperProps={{
            sx: { p: 2, borderRadius: 3 },
          }}
        >
          <TemplateList />
        </Dialog>
      )}
    </Box>
  );
}
