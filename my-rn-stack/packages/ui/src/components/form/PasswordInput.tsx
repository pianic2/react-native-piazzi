// ui/components/form/PasswordInput.tsx

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react-native";
import { Input } from "./Input";

export function PasswordInput(props: any) {
  const [visible, setVisible] = useState(false);

  return (
    <Input
      {...props}
      secureTextEntry={!visible}
      rightIcon={visible ? EyeOff : Eye}
      onPressIn={() => setVisible((v) => !v)}
    />
  );
}
