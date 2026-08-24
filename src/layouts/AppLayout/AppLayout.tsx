import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { BaseNavbar } from "../../components/BaseNavbar/BaseNavbar";
import type { BaseNavbarProps } from "../../components/BaseNavbar/types/navbar.types";

export default function AppLayout(props: BaseNavbarProps) {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f8fafc",
      }}
    >
      <BaseNavbar {...props} />

      <Box sx={{ flex: 1, overflow: "hidden" }}>
        <Outlet />
      </Box>
    </Box>
  );
}
