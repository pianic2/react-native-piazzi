// apps/mobile/app/_layout.tsx

import React from "react";
import { Slot } from "expo-router";

import { ThemeProvider, ToastProvider, NavBar, Page } from "ui";

import Logo from "../assets/logo"

import Icon from "react-native-vector-icons/FontAwesome6";



const NAV_ITEMS = [
  { label: "Home", href: "/", icon: <Icon name="house" size={18} /> },
  { label: "Overview", href: "/getting-started", icon: <Icon name="house" size={18} /> },
  { label: "Docs", href: "/docs", icon: <Icon name="book" size={18} /> },
  { label: "Examples", href: "/examples", icon: <Icon name="house" size={18} /> },
];

export default function RootLayout() {
  
  return (
    <ThemeProvider withScroll={false}>
      <ToastProvider>

        <Page>
          {/* Contenuto delle route */}
          <Slot />
        </Page>

        <NavBar
          logo={<Logo size={30}/>}
          items={NAV_ITEMS}
          bottomMaxItems={4}
          sidebarWidth={260}
          layout="auto"
        />
      </ToastProvider>
    </ThemeProvider>
  );
}
