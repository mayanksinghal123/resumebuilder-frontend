import { Box, Card, Skeleton, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDispatch, useSelector } from "react-redux";
import { useTemplate } from "../../hooks/useTemplate";
import { setTemplate } from "../../store/templateSlice";
import type { ResumeTemplate } from "../../api/services/types";
import type { RootState } from "../../store";

interface TemplateListProps {
  onSelectMobile?: () => void;
}

const TemplateList = ({ onSelectMobile }: TemplateListProps) => {
  const { data: templates, isLoading, error } = useTemplate();

  // Connect to Redux
  const dispatch = useDispatch();
  const selectedTemplate = useSelector(
    (state: RootState) => state.template.activeTemplateKey,
  );

  if (error) {
    return (
      <Box p={2}>
        <Typography color="error">Failed to load templates</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "320px" },
        flexShrink: 0,
        bgcolor: "#fff",
        borderLeft: "1px solid",
        borderColor: "divider",
        overflowY: "auto",
        p: 3,
      }}
    >
      <Typography variant="h5" fontWeight={700} mb={1}>
        ⭐ Templates
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Click any template to instantly restyle your resume.
      </Typography>

      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: 2 }}
      >
        {isLoading &&
          Array.from({ length: 6 }).map((_, idx) => (
            <Skeleton key={idx} variant="rounded" height={220} />
          ))}

        {templates?.map((template: ResumeTemplate) => {
          const isSelected = selectedTemplate === template.id;

          return (
            <Card
              key={template.id}
              onClick={() => {
                dispatch(setTemplate(template.key)); // Fire action to Redux Store
                onSelectMobile?.(); // Triggers close handler if inside Dialog modal
              }}
              sx={{
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                borderRadius: 1,
                transition: "all .25s ease",
                border: isSelected ? "2px solid #10b981" : "1px solid #e5e7eb",
                boxShadow: isSelected
                  ? "0 0 0 4px rgba(16,185,129,.15)"
                  : "none",
                "&:hover": { transform: "translateY(-3px)", boxShadow: 3 },
              }}
            >
              <Box
                component="img"
                src={template.thumbnail_url}
                alt={template.name}
                sx={{
                  width: "100%",
                  display: "block",
                  aspectRatio: "3 / 4",
                  objectFit: "cover",
                }}
              />
              {isSelected && (
                <CheckCircleIcon
                  color="success"
                  sx={{
                    position: "absolute",
                    bottom: 12,
                    right: 12,
                    bgcolor: "#fff",
                    borderRadius: "50%",
                    fontSize: 28,
                  }}
                />
              )}
              <Box p={1.5}>
                <Typography variant="body2" fontWeight={600} noWrap>
                  {template.name}
                </Typography>
              </Box>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default TemplateList;
