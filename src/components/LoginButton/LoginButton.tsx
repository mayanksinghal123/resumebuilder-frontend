import type { ButtonHTMLAttributes } from "react";
import { useRequireAuth } from "../../hooks/useRequireAuth";
import { Button, type ButtonVariant } from "../ui/Button";
interface LoginButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> {
  variant?: ButtonVariant;
}
export default function LoginButton({
  variant = "primary",
  ...props
}: LoginButtonProps) {
  const { requireAuth } = useRequireAuth();
  return (
    <Button variant={variant} onClick={() => requireAuth()} {...props}>
      Login
    </Button>
  );
}
