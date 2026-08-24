import { Button } from "@mui/material";
import LoginButton from "../../../components/LoginButton/LoginButton";

export function useHomeNavigation() {
  // 1. Landing page specific menu items
  const landingMenuItems = [
    { label: "Templates", onClick: () => console.log("Navigate to Templates") },
    { label: "Features", onClick: () => console.log("Navigate to Features") },
    { label: "Pricing", onClick: () => console.log("Navigate to Pricing") },
  ];

  // 2. Desktop actions layout
  const desktopButtons = (
    <>
      <LoginButton
        variant="text"
        sx={{
          color: "text.primary",
          fontWeight: 600,
          textTransform: "none",
        }}
      />
      <Button
        variant="contained"
        sx={{
          px: 3,
          py: 1,
          borderRadius: "999px",
          textTransform: "none",
          fontWeight: 700,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 10px 20px rgba(37,99,235,.15)",
          },
        }}
      >
        Get Started
      </Button>
    </>
  );

  // 3. Mobile drawer actions layout
  const mobileButtons = (
    <>
      <LoginButton
        variant="outlined"
        fullWidth
        sx={{
          textTransform: "none",
          borderRadius: 3,
          color: "text.primary",
        }}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{
          textTransform: "none",
          borderRadius: 3,
          fontWeight: 700,
        }}
      >
        Get Started
      </Button>
    </>
  );

  return {
    menuItems: landingMenuItems,
    desktopActions: desktopButtons,
    mobileActions: mobileButtons,
  };
}
