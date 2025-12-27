// apps/mobile/app/_layout.tsx

import React from "react";
import { Slot } from "expo-router";

import { ThemeProvider, NavBar, Page } from "ui";

import Logo from "../assets/logo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'


const NAV_ITEMS = [
  { label: "Home", href: "/", icon: <FontAwesomeIcon icon={faHouse} /> },
  { label: "Overview", href: "/getting-started", icon: <FontAwesomeIcon icon={faHouse} /> },
  { label: "Docs", href: "/docs", icon: <FontAwesomeIcon icon={faHouse} /> },
  { label: "Examples", href: "/docs999", icon: <FontAwesomeIcon icon={faHouse} /> },
];

export default function RootLayout() {
  
  return (
    <ThemeProvider withScroll={false}>

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
    </ThemeProvider>
  );
}
