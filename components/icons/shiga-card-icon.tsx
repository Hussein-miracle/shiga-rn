import { View, Text } from "react-native";
import Svg, { SvgProps, Path } from "react-native-svg";
import React from "react";

const ShigaCardIcon = (props: SvgProps) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      {...props}
    >
    <Path
      stroke="white"
      strokeLinecap="round"
      strokeWidth={4}
      d="M8.3 10.1h1"
    />
    <Path
      stroke="white"
      strokeWidth={2.6}
      d="M2.2 16.2V7.8a4 4 0 0 1 4-4h12.1a4 4 0 0 1 4 4v8.4a4 4 0 0 1-4 4H6.2a4 4 0 0 1-4-4Z"
    />
    </Svg>
  );
};

export default ShigaCardIcon;
