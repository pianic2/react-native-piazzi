// colors.base.ts

export const baseLight = {
  text: "#1A1A1A",
  background: "#FFFFFF",
  surface: "#F7F7F7",

  primary: { bg: "#FF8A3D", text: "#FFFFFF", border: "#FF8A3D" },
  secondary: { bg: "#F2E5DA", text: "#3A2F2A", border: "#EADFD6" },
  outline: { bg: "transparent", text: "#FF8A3D", border: "#FF8A3D" },

  success: { bg: "#5BB98C", text: "#FFFFFF", border: "#5BB98C" },
  warning: { bg: "#F4A236", text: "#FFFFFF", border: "#F4A236" },
  danger: { bg: "#E16458", text: "#FFFFFF", border: "#E16458" },

  codeBg: "#F4F4F4",
  codeBorder: "#E0E0E0",
  codeText: "#333333",
};

export const baseDark = {
  text: "#FFFFFF",
  background: "#1A1A1A",
  surface: "#2A2A2A",

  primary: { bg: "#FF8A3D", text: "#FFFFFF", border: "#FF8A3D" },
  secondary: { bg: "#3A2F2A", text: "#F2E5DA", border: "#564A45" },
  outline: { bg: "transparent", text: "#FF8A3D", border: "#FF8A3D" },

  success: { bg: "#5BB98C", text: "#FFFFFF", border: "#5BB98C" },
  warning: { bg: "#F4A236", text: "#FFFFFF", border: "#F4A236" },
  danger: { bg: "#E16458", text: "#FFFFFF", border: "#E16458" },

  codeBg: "#222222",
  codeBorder: "#444444",
  codeText: "#EEEEEE",
};

export const baseTheme = {
  light: baseLight,
  dark: baseDark,
};
