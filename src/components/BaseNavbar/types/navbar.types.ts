import type { ReactNode } from "react";
export interface MenuItem { label: string; onClick?: () => void; }
export interface BaseNavbarProps { menuItems?: MenuItem[]; actions?: { desktop?: ReactNode; mobile?: ReactNode }; desktopActions?: ReactNode; mobileActions?: ReactNode; logo?: ReactNode; }
