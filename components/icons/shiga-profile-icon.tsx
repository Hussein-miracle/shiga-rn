import Svg, { SvgProps, Path } from "react-native-svg";
import React from "react";

const ShigaProfileIcon = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        stroke="white"
        strokeWidth={2.68}
        d="M17.732 20.598c0-2.59-2.566-4.69-5.732-4.69-3.165 0-5.731 2.1-5.731 4.69M21.9 12c0 5.468-4.432 9.9-9.9 9.9S2.1 17.468 2.1 12 6.532 2.1 12 2.1s9.9 4.432 9.9 9.9Zm-7.034-2.345a2.866 2.866 0 1 1-5.732 0 2.866 2.866 0 0 1 5.732 0Z"
      />
    </Svg>
  );
};

export default ShigaProfileIcon;
