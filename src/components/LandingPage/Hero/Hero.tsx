import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const resumeLineWidths = [
  "100%",
  "85%",
  "95%",
  "75%",
  "90%",
  "100%",
  "80%",
  "92%",
  "70%",
  "100%",
  "88%",
  "95%",
  "78%",
  "90%",
];

export default function Hero() {
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={{ xs: 6, md: 8 }}
        alignItems="center"
        sx={{
          minHeight: {
            xs: "auto",
            md: "90vh",
          },
          py: {
            xs: 8,
            md: 0,
          },
        }}
      >
        {/* LEFT CONTENT */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Chip
            label="✨ AI Powered Resume Builder"
            sx={{
              mb: 3,
              bgcolor: `${theme.palette.primary.main}15`,
              color: theme.palette.primary.main,
              fontWeight: 600,
              borderRadius: 999,
            }}
          />

          <Typography
            sx={{
              fontSize: {
                xs: "2.75rem",
                sm: "3.5rem",
                md: "4.5rem",
                lg: "5rem",
              },
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              mb: 3,
              maxWidth: 700,
              color: theme.palette.text.primary,
            }}
          >
            Build a{" "}
            <Box
              component="span"
              sx={{
                background:
                  theme.documentColors.gradient.primary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Professional Resume
            </Box>{" "}
            in Minutes
          </Typography>

          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontSize: {
                xs: "1rem",
                md: "1.125rem",
              },
              mb: 4,
              maxWidth: 560,
            }}
          >
            Create ATS-friendly resumes using beautiful
            templates and AI-powered suggestions that help
            you stand out.
          </Typography>

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
            mb={3}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: 700,
                bgcolor: theme.palette.primary.main,

                "&:hover": {
                  bgcolor: theme.palette.primary.dark,
                },
              }}
            >
              Create Resume Free
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: 700,
                borderColor:
                  theme.palette.background.border,
                color: theme.palette.text.primary,

                "&:hover": {
                  borderColor:
                    theme.palette.primary.main,
                  bgcolor:
                    theme.palette.background.surface,
                },
              }}
            >
              Browse Templates
            </Button>
          </Stack>

          <Typography
            sx={{
              color: theme.palette.text.secondary,
              mb: 3,
            }}
          >
            ✓ No credit card required
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            useFlexGap
          >
            {[
              "ATS Friendly",
              "AI Powered",
              "PDF Export",
            ].map((item) => (
              <Chip
                key={item}
                label={item}
                variant="outlined"
                sx={{
                  borderColor:
                    theme.palette.background.border,
                  color: theme.palette.text.secondary,
                }}
              />
            ))}
          </Stack>
        </Grid>

        {/* RIGHT CONTENT */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              height: {
                xs: 420,
                md: 560,
              },
              mt: {
                xs: 4,
                md: 0,
              },
            }}
          >
            {/* Blur Background */}
            <Box
              sx={{
                position: "absolute",
                width: 350,
                height: 350,
                bgcolor: theme.palette.primary.main,
                opacity: 0.15,
                filter: "blur(120px)",
                top: 40,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />

            {/* Resume Preview */}
            <Paper
              elevation={0}
              sx={{
                width: {
                  xs: "100%",
                  sm: 360,
                  md: 420,
                },
                maxWidth: 420,
                height: {
                  xs: 380,
                  md: 520,
                },
                mx: "auto",
                borderRadius: 5,
                p: 3,
                bgcolor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.background.border}`,
                boxShadow: theme.shadows[8],
                position: "relative",
                zIndex: 2,
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                color="text.primary"
              >
                John Anderson
              </Typography>

              <Typography
                color="text.secondary"
                mb={3}
              >
                Senior Frontend Engineer
              </Typography>

              {resumeLineWidths.map((width, index) => (
                <Box
                  key={index}
                  sx={{
                    height: 10,
                    width,
                    bgcolor:
                      theme.palette.background.border,
                    borderRadius: 1,
                    mb: 1.5,
                  }}
                />
              ))}
            </Paper>

            {/* ATS CARD */}
            <Paper
              sx={{
                position: "absolute",
                top: {
                  xs: -10,
                  md: 50,
                },
                left: {
                  xs: 0,
                  md: -20,
                },
                p: 2,
                borderRadius: 4,
                bgcolor: `${theme.palette.background.paper}CC`,
                border: `1px solid ${theme.palette.background.border}`,
                backdropFilter: "blur(12px)",
                boxShadow: theme.shadows[4],
                zIndex: 3,
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
              >
                ATS Score
              </Typography>

              <Box
                display="flex"
                alignItems="center"
                gap={1}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    bgcolor:
                      theme.documentColors.success,
                    borderRadius: "50%",
                  }}
                />

                <Typography
                  variant="h4"
                  fontWeight={800}
                  sx={{
                    color:
                      theme.documentColors.success,
                  }}
                >
                  92%
                </Typography>
              </Box>
            </Paper>

            {/* AI CARD */}
            <Paper
              sx={{
                position: "absolute",
                right: {
                  xs: 0,
                  md: -20,
                },
                top: {
                  xs: 240,
                  md: 180,
                },
                width: {
                  xs: 180,
                  md: 220,
                },
                p: 2,
                borderRadius: 4,
                bgcolor: `${theme.palette.background.paper}CC`,
                border: `1px solid ${theme.palette.background.border}`,
                backdropFilter: "blur(12px)",
                boxShadow: theme.shadows[4],
                zIndex: 3,
              }}
            >
              <Typography
                fontWeight={700}
                mb={1}
                color="text.primary"
              >
                AI Suggestions
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                • Improve summary
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                • Add achievements
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                • Optimize keywords
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}