import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
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
import type { BaseNavbarProps } from "./types/navbar.types";

export function BaseNavbar({ menuItems = [], actions, logo }: BaseNavbarProps) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: `${theme.palette.background.paper}D9`,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${
            theme.palette.background.border ?? "rgba(0,0,0,0.08)"
          }`,
          color: theme.palette.text.primary,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: 72 }}>
            {/* Logo */}
            {logo ?? (
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  cursor: "pointer",
                  letterSpacing: "-0.03em",
                }}
              >
                ResumeAI
              </Typography>
            )}

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Menu */}
            <Stack
              direction="row"
              spacing={4}
              alignItems="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {menuItems.map((item) => (
                <Typography
                  key={item.label}
                  onClick={item.onClick}
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
                  {item.label}
                </Typography>
              ))}

              {actions?.desktop}
            </Stack>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                color: theme.palette.text.primary,
                display: { xs: "flex", md: "none" },
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
            borderLeft: `1px solid ${
              theme.palette.background.border ?? "rgba(0,0,0,0.08)"
            }`,
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          {logo ?? (
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
              ResumeAI
            </Typography>
          )}

          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.label}
                onClick={() => {
                  item.onClick?.();
                  setOpen(false);
                }}
                sx={{ borderRadius: 2 }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    color: theme.palette.text.primary,
                  }}
                />
              </ListItemButton>
            ))}
          </List>

          <Stack spacing={2} mt={4}>
            {actions?.mobile}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
