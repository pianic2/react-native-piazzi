// apps/mobile/app/_layout.tsx

import React from "react";
import { Slot } from "expo-router";

import { ThemeProvider, NavBar } from "ui";

import Logo from "../assets/logo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NAV_ITEMS = [
  { label: "Home", href: "/", icon: <FontAwesomeIcon icon={byPrefixAndName.fas['house']} /> },
  { label: "Overview", href: "/getting-started", icon: <FontAwesomeIcon icon={byPrefixAndName.fas['house']} /> },
  { label: "Docs", href: "/docs", icon: <FontAwesomeIcon icon={byPrefixAndName.fas['house']} /> },
  { label: "Examples", href: "/docs999", icon: <FontAwesomeIcon icon={byPrefixAndName.fas['house']} /> },
];

export default function RootLayout() {
  return (
    <ThemeProvider withScroll={false}>

        {/* Contenuto delle route */}
        <Slot />

      <NavBar
        logo={<Logo size={40}/>}
        items={NAV_ITEMS}
        bottomMaxItems={4}
        sidebarWidth={260}
        layout="auto"
      />
    </ThemeProvider>
  );
}
