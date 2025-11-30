export const COLOR_MAP = {
  light: {
    primary: { bg: "#FF8A3D", text: "#FFFFFF", border: "#FF8A3D" },
    secondary: { bg: "#F2E5DA", text: "#3A2F2A", border: "#EADFD6" },
    outline: { bg: "transparent", text: "#FF8A3D", border: "#FF8A3D" },

    // AGGIUNGERE QUESTI
    background: "#FFF8F1",
    surface: "#FFFFFF",
    text: "#3A2F2A",

    codeBg: "#F4F4F4",
    codeBorder: "#E0E0E0",
    codeText: "#333333",
  },

  dark: {
    primary: { bg: "#FF8A3D", text: "#1C1C1C", border: "#FF8A3D" },
    secondary: { bg: "#3A2F2A", text: "#F2E5DA", border: "#4A3F38" },
    outline: { bg: "transparent", text: "#FF8A3D", border: "#FF8A3D" },

    // AGGIUNGERE QUESTI
    background: "#161412",
    surface: "#1F1C19",
    text: "#F2E5DA",

    codeBg: "#222222",
    codeBorder: "#444444",
    codeText: "#EEEEEE",
  },
};

export type ThemeMode = keyof typeof COLOR_MAP;
