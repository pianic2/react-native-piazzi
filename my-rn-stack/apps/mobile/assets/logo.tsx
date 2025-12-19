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
      viewBox="0 0 512 512"
      fill="none"
    >
      {/* U */}
      <Path
        d="M140 140V290C140 354.065 191.935 406 256 406C320.065 406 372 354.065 372 290V140H326V290C326 328.66 294.66 360 256 360C217.34 360 186 328.66 186 290V140H140Z"
        fill="#000000"
      />

      {/* I */}
      <Rect
        x={388}
        y={140}
        width={40}
        height={266}
        rx={20}
        fill="#5B7CFF"
      />
    </Svg>
  );
}
