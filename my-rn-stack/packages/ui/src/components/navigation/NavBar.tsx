import React from "react";
import { Platform } from "react-native";
import { NavProvider, NavItem } from "./NavContext";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import { SideBar } from "./SideBar";

export interface NavBarProps {
  items?: NavItem[];
  logo?: React.ReactNode;

  // IMPORTANT: l’app fornisce lo stato di routing
  pathname: string;
  navigate: (href: string) => void;

  layout?: "auto" | "top" | "bottom" | "sidebar";
  bottomMaxItems?: number;
  sidebarWidth?: number;
}

export function NavBar({
  items = [],
  logo,
  pathname,
  navigate,
  layout = "auto",
  bottomMaxItems = 5,
  sidebarWidth = 260,
}: NavBarProps) {
  const finalLayout =
    layout === "auto" ? (Platform.OS === "web" ? "top" : "bottom") : layout;

  return (
    <NavProvider items={items} logo={logo} navigate={navigate} pathname={pathname}>
      {finalLayout === "top" && <TopBar />}
      {finalLayout === "bottom" && <BottomBar />}
      {finalLayout === "sidebar" && <SideBar/>}
    </NavProvider>
  );
}
