// ui/components/form/PasswordInput.tsx

import React, { useState } from "react";

import { Input } from "./Input";

export function PasswordInput(props: any) {
  const [visible, setVisible] = useState(false);

  return (
    <Input
      {...props}
      secureTextEntry={!visible}
      onPressIn={() => setVisible((v) => !v)}
    />
  );
}
