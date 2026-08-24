import { Avatar, Button, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { requestDownload } from "../../../store/resumeSlice";
import DownloadButton from "../../../components/DownloadButton/DownloadButton";
import LoginButton from "../../../components/LoginButton/LoginButton";

interface UseAppNavigationProps {
  onToggleTemplates: () => void;
}

export function useAppNavigation({ onToggleTemplates }: UseAppNavigationProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const isAuthenticated = !!user;
  const isDownloading = useAppSelector((state) => state.resume.isDownloading);
  const dashboardMenuItems = [];
  const handleDownload = () => {
    dispatch(requestDownload());
  };

  const desktopButtons = (
    <Stack direction="row" spacing={2} alignItems="center">
      <DownloadButton
        variant="contained"
        loading={isDownloading}
        onClick={handleDownload}
        sx={{ textTransform: "none", borderRadius: 2 }}
      />
      {isAuthenticated ? (
        <Avatar
          sx={{ width: 40, height: 40, cursor: "pointer" }}
          src="/profile.jpg"
        />
      ) : (
        <LoginButton
          variant="text"
          sx={{
            color: "text.primary",
            fontWeight: 600,
            textTransform: "none",
          }}
        />
      )}
    </Stack>
  );

  const mobileButtons = (
    <Stack spacing={2} mt={2}>
      <DownloadButton
        fullWidth
        variant="contained"
        loading={isDownloading}
        onClick={handleDownload}
      />

      <Button fullWidth variant="outlined" onClick={onToggleTemplates}>
        Change Template
      </Button>
    </Stack>
  );

  return {
    menuItems: dashboardMenuItems,
    desktopActions: desktopButtons,
    mobileActions: mobileButtons,
  };
}
