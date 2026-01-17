// ui/components/form/Textarea.tsx

import { Input } from "./Input";
import { useTheme } from "../../theme/useTheme";

export function Textarea(props: any) {
  const { theme } = useTheme();
  return (
    <Input
      {...props}
      multiline
      textAlignVertical="top"
      style={{ minHeight: 100, paddingVertical: theme.spacing["md"], ...props.style }}
    />
  );
}
