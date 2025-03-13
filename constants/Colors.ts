/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
  swipeBg:"#757484",
  warn:"#FF453A",
  success:"#A6FFB5",
  dangerBg:"#2F1D1C",
  white: "#FFFFFF",
  black: "#0F0F10",
  black100:"#232425",
  black200:"#171819",
  background:"#171819",
  pink:"#FFC8DD",
  grey:"#454647",
  subtext:"#6F6F6F",
  placeholder:"#2E302E",
  lightBlue:"#727AE4",
  inputField:"#1E1F20",
  iconContainer:"#232425",
  pastelBlue:"#A2D2FF",
  pastelOrange:"#FF9770",
  primary:"#727AE4"
} as const;
