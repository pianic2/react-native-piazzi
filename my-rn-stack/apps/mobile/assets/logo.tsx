import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

type LogoUIProps = {
  size?: number;
};

export default function LogoUI({ size = 32 }: LogoUIProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 288 266"
      fill="none"
    >
      <Path
        d="M0 0V150C0 214.065 51.935 266 116 266C180.065 266 232 214.065 232 150V0H186V150C186 188.66 154.66 220 116 220C77.34 220 46 188.66 46 150V0H0Z"
        fill="#000000"
      />

      <Rect
        x={248}
        y={0}
        width={40}
        height={266}
        rx={20}
        fill="#5B7CFF"
      />
    </Svg>
  );
}
