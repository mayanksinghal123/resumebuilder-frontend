// components/Layout/A4Paper.tsx

import { Paper, type PaperProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "210mm",
  minHeight: "297mm",
  margin: "0 auto",
  padding: "20px",
  position: "relative",
  flexShrink: 0,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[4],
  overflow: "hidden",
  transition: theme.transitions.create(["background-color", "box-shadow"], {
    duration: theme.transitions.duration.short,
  }),

  "@media print": {
    margin: 0,
    boxShadow: "none",
  },
}));

interface A4PaperProps extends PaperProps {
  children: React.ReactNode;
}

const A4Paper: React.FC<A4PaperProps> = ({ children, sx, ...props }) => {
  return (
    <StyledPaper elevation={0} sx={sx} {...props}>
      {children}
    </StyledPaper>
  );
};

export default A4Paper;
