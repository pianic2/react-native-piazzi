import React from "react";
import { Slot, useRouter, usePathname } from "expo-router";

import { ThemeProvider, ToastProvider, NavBar, Page } from "ui";

import Logo from "../assets/logo";
import Icon from "react-native-vector-icons/FontAwesome6";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: <Icon name="house" size={18} /> },
  { label: "Overview", href: "/getting-started", icon: <Icon name="house" size={18} /> },
  { label: "Docs", href: "/docs", icon: <Icon name="book" size={18} /> },
  { label: "Examples", href: "/examples", icon: <Icon name="house" size={18} /> },
];

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname();

  const navigate = (href: string) => {
    if (href !== pathname) router.push(href as any);
  };

  return (
    <ThemeProvider withScroll={false}>
      <ToastProvider>
        <Page>
          <Slot />
        </Page>

        <NavBar
          logo={<Logo size={30} />}
          items={NAV_ITEMS}
          pathname={pathname}
          navigate={navigate}
          bottomMaxItems={4}
          sidebarWidth={260}
          layout="auto"
        />
      </ToastProvider>
    </ThemeProvider>
  );
}
