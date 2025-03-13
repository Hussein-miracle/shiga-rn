import React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";

const ShigaTransactionsIcon = (props:SvgProps) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <G stroke="white" clipPath="url(#a)">
        <Path
          fill="white"
          strokeWidth={0.3}
          d="M15.7 12.527c0-.754-.617-1.227-1.334-1.227H12.12V7.658c0-.35-.09-.681-.281-.928a1.045 1.045 0 0 0-.86-.405c-.373 0-.657.154-.844.408-.181.248-.261.578-.261.925v4.736c0 .736.597 1.334 1.334 1.334h3.157c.356 0 .688-.108.934-.316.248-.21.4-.514.4-.885Z"
        />
        <Path
          strokeWidth={2.683}
          d="M11.75 2.529a9.47 9.47 0 1 0 9.47 9.47 9.481 9.481 0 0 0-9.47-9.47Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M.25.5h23v23h-23z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ShigaTransactionsIcon;
