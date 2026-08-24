import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const menuItems = ["Templates", "Features", "Pricing"];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: `${theme.palette.background.paper}D9`,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${theme.palette.background.border}`,
          color: theme.palette.text.primary,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: 72,
            }}
          >
            {/* Logo */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: theme.palette.text.primary,
                cursor: "pointer",
                letterSpacing: "-0.03em",
              }}
            >
              ResumeAI
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Menu */}
            <Stack
              direction="row"
              spacing={4}
              alignItems="center"
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              {menuItems.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    cursor: "pointer",
                    fontWeight: 500,
                    color: theme.palette.text.secondary,
                    transition: "all .2s ease",
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}

              <Button
                variant="text"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  textTransform: "none",
                }}
              >
                Login
              </Button>

              <Button
                variant="contained"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  px: 3,
                  py: 1,
                  borderRadius: "999px",
                  textTransform: "none",
                  fontWeight: 700,
                  boxShadow: "none",

                  "&:hover": {
                    bgcolor: theme.palette.primary.dark,
                    boxShadow:
                      "0 10px 20px rgba(37,99,235,.15)",
                  },
                }}
              >
                Get Started
              </Button>
            </Stack>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                color: theme.palette.text.primary,
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: theme.palette.background.paper,
            borderLeft: `1px solid ${theme.palette.background.border}`,
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            ResumeAI
          </Typography>

          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item}
                onClick={() => setOpen(false)}
                sx={{
                  borderRadius: 2,
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            ))}
          </List>

          <Stack spacing={2} mt={4}>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                textTransform: "none",
                borderRadius: 3,
                borderColor:
                  theme.palette.background.border,
                color: theme.palette.text.primary,
              }}
            >
              Login
            </Button>

            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: theme.palette.primary.main,
                textTransform: "none",
                borderRadius: 3,
                fontWeight: 700,

                "&:hover": {
                  bgcolor: theme.palette.primary.dark,
                },
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}