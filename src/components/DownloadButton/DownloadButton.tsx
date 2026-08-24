// components/common/DownloadButton.tsx

import DownloadIcon from "@mui/icons-material/Download";
import { Button, CircularProgress, type ButtonProps } from "@mui/material";

interface DownloadButtonProps extends Omit<ButtonProps, "children"> {
  loading?: boolean;
  label?: string;
}

const DownloadButton = ({
  loading = false,
  label = "Download PDF",
  disabled,
  ...buttonProps
}: DownloadButtonProps) => {
  return (
    <Button
      {...buttonProps}
      disabled={disabled || loading}
      startIcon={
        loading ? (
          <CircularProgress size={18} color="inherit" />
        ) : (
          <DownloadIcon />
        )
      }
    >
      {loading ? "Generating..." : label}
    </Button>
  );
};

export default DownloadButton;
