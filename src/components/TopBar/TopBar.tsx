import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function TopBar() {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ gap: 3 }}>
        <Box>
          <Typography variant="h5" fontWeight={700}>
            Resume Builder
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Craft, restyle, and export in minutes
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
