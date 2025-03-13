import { View, Text } from "react-native";
import Svg, { SvgProps, Path } from "react-native-svg";
import React from "react";

const ShigaSearchIcon = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fill="white"
        d="M18.309 19.587a1.4 1.4 0 0 0 1.882-2.074l-1.882 2.074ZM15.394 8.972a6.122 6.122 0 0 1-6.122 6.122v2.8a8.922 8.922 0 0 0 8.922-8.922h-2.8Zm-6.122 6.122A6.122 6.122 0 0 1 3.15 8.972H.35a8.922 8.922 0 0 0 8.922 8.922v-2.8ZM3.15 8.972A6.122 6.122 0 0 1 9.272 2.85V.05A8.922 8.922 0 0 0 .35 8.972h2.8ZM9.272 2.85a6.122 6.122 0 0 1 6.122 6.122h2.8A8.922 8.922 0 0 0 9.272.05v2.8Zm4.7 12.8 4.337 3.937 1.882-2.074-4.336-3.936-1.882 2.073Z"
      />
    </Svg>
  );
};

export default ShigaSearchIcon;
