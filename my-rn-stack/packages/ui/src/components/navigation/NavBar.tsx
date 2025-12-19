import React from "react";
import { View, Platform } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { NavProvider, NavItem } from "./NavContext";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import { SideBar } from "./SideBar";

export interface NavBarProps {
  items?: NavItem[];
  logo?: React.ReactNode;
  layout?: "auto" | "top" | "bottom" | "sidebar";
  bottomMaxItems?: number;
  sidebarWidth?: number;
}

export function NavBar({
  items,
  logo,

  layout = "auto",
  bottomMaxItems = 5,
  sidebarWidth = 260,
}: NavBarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const navigate = (href: string) => {
    if (href !== pathname) {
      router.push(href as any);
    }
  };


  const finalLayout =
    layout === "auto"
      ? Platform.OS === "web"
        ? "top"
        : "bottom"
      : layout;

  return (
    <NavProvider
      items={items}
      logo={logo}
      navigate={navigate}
      pathname={pathname}
      >
      {finalLayout === "top" && <TopBar />}
      {finalLayout === "bottom" && (<BottomBar maxItems={bottomMaxItems} />)}
      {finalLayout === "sidebar" && (<SideBar width={sidebarWidth} />)}
    </NavProvider>
  );
}
