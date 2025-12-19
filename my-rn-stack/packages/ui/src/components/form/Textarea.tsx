// ui/components/form/Textarea.tsx

import { Input } from "./Input";

export function Textarea(props: any) {
  return (
    <Input
      {...props}
      multiline
      textAlignVertical="top"
      style={{ minHeight: 100 }}
    />
  );
}
