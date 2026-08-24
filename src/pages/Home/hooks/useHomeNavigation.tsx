import { Button } from "../../../components/ui/Button";
import LoginButton from "../../../components/LoginButton/LoginButton";
import { useRequireAuth } from "../../../hooks/useRequireAuth";
export function useHomeNavigation() {
  const { requireAuth } = useRequireAuth();
  const menuItems = ["Templates", "Features", "Pricing"].map((label) => ({
    label,
  }));
  const desktopActions = (
    <>
      <LoginButton variant="ghost" />
      <Button onClick={() => requireAuth()}>Get Started</Button>
    </>
  );
  const mobileActions = (
    <>
      <LoginButton variant="outline" className="w-full" />
      <Button className="w-full" onClick={() => requireAuth()}>
        Get Started
      </Button>
    </>
  );
  return { menuItems, desktopActions, mobileActions };
}
