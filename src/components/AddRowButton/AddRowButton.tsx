// AddRowButton.tsx
import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import type { BoxProps } from "@mui/material";

interface AddRowButtonProps extends BoxProps {
  label?: string;
  onClick: () => void;
}

const AddRowButton = ({ label = "Add More", onClick, sx, ...rest }: AddRowButtonProps) => (
  <Box
    onClick={onClick}
    sx={[
      (theme) => ({
        width: "fit-content",
        border: `1.5px dashed ${theme.palette.divider}`,
        borderRadius: 1.5,
        p: 0.8,
        display: "flex",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.5,
        cursor: "pointer",
        color: theme.palette.text.disabled,
        transition: "all 0.15s ease",
        "&:hover": {
          borderColor: theme.palette.text.secondary,
          color: theme.palette.text.secondary,
          bgcolor: theme.palette.action.hover,
        },
      }),
      ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
    ]}
    {...rest}
  >
    <AddIcon sx={{ fontSize: 14 }} />
    <Typography variant="caption">{label}</Typography>
  </Box>
);

export default AddRowButton;