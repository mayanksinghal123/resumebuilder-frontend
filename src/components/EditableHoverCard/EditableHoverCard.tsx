import { Box, IconButton, type BoxProps } from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface EditableHoverCardProps extends BoxProps {
  children: React.ReactNode;
  onDelete?: () => void;
  showDelete?: boolean;
}

const EditableHoverCard = ({
  children,
  onDelete,
  showDelete = true,
  sx,
  ...rest
}: EditableHoverCardProps) => {
  return (
    <Box
      sx={[
        (theme) => ({
          position: "relative",
          borderRadius: "8px",
          transition: "box-shadow 0.2s ease, background-color 0.2s ease",
          lineHeight: 1,
          "&:hover": {
            boxShadow: theme.shadows[1],
            backgroundColor: theme.palette.action.hover,
          },
          /**
           * Show actions on hover
           */
          "&:hover > .hover-actions": {
            opacity: 1,
            visibility: "visible",
          },
        }),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      {...rest}
    >
      {/* Actions */}
      {showDelete && onDelete && (
        <Box
          className="hover-actions"
          sx={{
            position: "absolute",
            top: -28,
            right: 8,
            opacity: 0,
            visibility: "hidden",
            transition: "all 0.2s ease",
            zIndex: 2,
          }}
        >
          <IconButton size="small" color="error" onClick={onDelete}>
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </Box>
      )}

      {children}
    </Box>
  );
};

export default EditableHoverCard;
