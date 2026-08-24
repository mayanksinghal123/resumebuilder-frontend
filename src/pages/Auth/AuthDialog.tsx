// src/components/auth/AuthDialog.tsx

import { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeLoginDialog } from "../../store/authSlice";
import LoginForm from "./LoginForm";

const AuthDialog = () => {
  const dispatch = useAppDispatch();

  const { loginDialogOpen, user } = useAppSelector(
    (state) => state.auth,
  );

  const handleClose = () => {
    dispatch(closeLoginDialog());
  };

  // Automatically close after successful login
  useEffect(() => {
    if (user && loginDialogOpen) {
      handleClose();
    }
  }, [user, loginDialogOpen]);

  return (
    <Dialog
      open={loginDialogOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 1,
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Resume Builder
        </Typography>

        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;