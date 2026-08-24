import { BaseNavbar } from "../../components/BaseNavbar/BaseNavbar";
import Hero from "../../components/LandingPage/Hero/Hero";
import { useHomeNavigation } from "./hooks/useHomeNavigation";
export default function Home() {
  const { menuItems, desktopActions, mobileActions } = useHomeNavigation();
  return (
    <div className="min-h-screen bg-background">
      <BaseNavbar
        menuItems={menuItems}
        desktopActions={desktopActions}
        mobileActions={mobileActions}
      />
      <Hero />
    </div>
  );
}
