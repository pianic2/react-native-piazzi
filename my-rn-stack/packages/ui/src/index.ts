// ===============================
// COMPONENTS
// ===============================

import { NavBar } from "./components/navigation/NavBar";

// Base UI
export { Button } from "./components/Button";
export { Card } from "./components/Card";


// Typography
export { P } from "./components/typography/P";
export { B } from "./components/typography/B";
export { Small } from "./components/typography/Small";
export { Code } from "./components/typography/Code";
export { CodeInline } from "./components/typography/CodeInline";
export { Quote } from "./components/typography/Quote";
export { TextGroup } from "./components/typography/TextGroup";
export { Divider } from "./components/typography/Divider";
export { Heading } from "./components/typography/Heading";

// Layout
export { Row } from "./components/layout/Row";
export { Column } from "./components/layout/Column";
export { Spacer } from "./components/layout/Spacer";
export { Section } from "./components/layout/Section";
export { Screen } from "./components/layout/Screen";
export { ThemedBackground } from "./theme/ThemedBackground";

// Form Components
export { Input } from "./components/form/Input";
export { InputPassword } from "./components/form/InputPassword";
export { Switch } from "./components/form/Switch";
export { Checkbox } from "./components/form/Checkbox";
export { RadioGroup } from "./components/form/RadioGroup";
export { Select } from "./components/form/Select";
export { FormField } from "./components/form/FormField";

// Navigation
export { NavBar } from "./components/navigation/NavBar";
export { Link } from "./components/navigation/Link";
// ===============================
// THEME SYSTEM
// ===============================

export { ThemeProvider } from "./theme/ThemeContext";
export { useTheme } from "./theme/useTheme";
export { extendTheme } from "./theme/extendTheme";
export * from "./theme/colors.base"; // baseLight, baseDark, baseTheme

// ===============================
// UTILS
// ===============================

export * from "./utils/deepMerge";

// ===============================
// AUTH, STORAGE & API
// ===============================
export * from "./auth/types";
export * from "./auth/AuthProvider";
export * from "./auth/useAuth";

export * from "./storage/expoSecureStore";
export * from "./storage/localStorage";

export * from "./api/djangoSimpleJwt";

// UI opzionali
export { LoginReact } from "./components/auth/LoginReact";
export { LoginWeb } from "./components/auth/LoginWeb";


