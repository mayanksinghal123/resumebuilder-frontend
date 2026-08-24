import { Box } from "@mui/material";
import Hero from "../../components/LandingPage/Hero/Hero";
import { useHomeNavigation } from "./hooks/useHomeNavigation";
import { BaseNavbar } from "../../components/BaseNavbar/BaseNavbar";

export default function Home() {
  const { menuItems, desktopActions, mobileActions } = useHomeNavigation();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at top left,
          rgba(37,99,235,.08),
          transparent 35%),
          radial-gradient(circle at top right,
          rgba(124,58,237,.08),
          transparent 35%),
          #fff
        `,
      }}
    >
      <BaseNavbar
        menuItems={menuItems}
        desktopActions={desktopActions}
        mobileActions={mobileActions}
      />

      <Hero />
    </Box>
  );
}
