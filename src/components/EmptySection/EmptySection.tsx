// EmptySection.tsx
import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import type { EmptySectionProps } from "./types/emptySection.types";

const EmptySection = ({ label = "Add item", onClick }: EmptySectionProps) => {
  return (
    <Box
      onClick={onClick}
      sx={[
        (theme) => ({
          border: `1.5px dashed ${theme.palette.divider}`,
          borderRadius: 2,
          my: 3,
          py: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          cursor: "pointer",
          color: theme.palette.text.disabled,
          transition: "all 0.2s ease",
          "&:hover": {
            borderColor: theme.palette.text.secondary,
            color: theme.palette.text.secondary,
            bgcolor: theme.palette.action.hover,
          },
        }),
      ]}
    >
      <AddIcon fontSize="small" />
      <Typography variant="body2">{label}</Typography>
    </Box>
  );
};

export default EmptySection;
