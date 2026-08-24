// components/LoginButton/LoginButton.tsx

import { Button, type ButtonProps } from "@mui/material";
import { useRequireAuth } from "../../hooks/useRequireAuth";

type LoginButtonProps = ButtonProps;

export default function LoginButton(props: LoginButtonProps) {
  const { requireAuth } = useRequireAuth();

  return (
    <Button variant="contained" onClick={() => requireAuth()} {...props}>
      Login
    </Button>
  );
}
