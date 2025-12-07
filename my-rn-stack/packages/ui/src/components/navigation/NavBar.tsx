import React from "react";
import { isWeb } from "../../utils/platform";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";

export interface NavAction {
  label?: string;
  icon?: React.ReactNode;
  href?: string;
  onPress?: () => void;
}

export interface NavBarProps {
  title?: string;              // usato solo su Web
  logo?: React.ReactNode;      // usato solo su Web
  left?: NavAction | null;     // usato solo su Web
  right?: NavAction[];         // Web (array), Mobile ignorato
  items?: NavAction[];         // Web (centrale), Mobile (tabs)
  force?: "web" | "mobile";
  style?: any;
}

/**
 * Navigation bar adattiva:
 * - Web → usa TopBar
 * - Mobile → usa BottomBar
 */
export function NavBar({
  title,
  logo,
  left,
  right = [],
  items = [],
  force,
  style,
}: NavBarProps) {
  
  const isWebDevice =
    force === "web" ? true :
    force === "mobile" ? false :
    isWeb();

  /* ---------------------------------------------
   * WEB → TopBar
   * --------------------------------------------- */
  if (isWebDevice) {
    return (
      <TopBar
        title={title}
        logo={logo}
        items={items}
        right={right}
        style={style}
      />
    );
  }

  /* ---------------------------------------------
   * MOBILE → BottomBar
   * BottomBar usa SOLO items[]
   * --------------------------------------------- */
  return (
    <BottomBar
      items={items}
      style={style}
    />
  );
}
