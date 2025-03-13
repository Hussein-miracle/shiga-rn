import React, { ReactNode } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import ShigaHomeIcon from "../icons/shiga-home-icon";
import ShigaTransactionsIcon from "../icons/shiga-transactions-icon";
import ShigaCardIcon from "../icons/shiga-card-icon";
import ShigaProfileIcon from "../icons/shiga-profile-icon";
import ShigaSearchIcon from "../icons/shiga-search-icon";
import { Href, RelativePathString, usePathname, useRouter } from "expo-router";
import { useKeyboardVisible } from "@/hooks/use-keyboard-visible";
import { Colors } from "@/constants/Colors";
import { useScreenContext } from "@/context/screen-navigation-context/screen-navigation-context";

const navigations:Array<{name:string;icon:ReactNode;href: Href}> = [
  {
    name: "Home",
    icon: <ShigaHomeIcon width={20.01} height={19.5} />,
    href: "/",
  },
  {
    name: "Transactions",
    icon: <ShigaTransactionsIcon width={24} height={24} />,
    href: "/transactions",
  },
  {
    name: "Search",
    icon: <ShigaSearchIcon width={24} height={24} style={{marginTop:5,}} />,
    href: "/search",
  },
  {
    name: "Card",
    icon: <ShigaCardIcon width={24} height={24} />,
    href: "/card",
  },
  {
    name: "Profile",
    icon: <ShigaProfileIcon width={24} height={24} />,
    href: "/profile",
  },
];

const NavigationItem = ({
  icon,
  isCurrentPath,
  path,
  onPress
}: {
  icon?: any;
  path: Href;
  isCurrentPath?: boolean;
  styles?: object;
  onPress?:() => void;
}) => {
  const router = useRouter();
  return (
    <Pressable
      style={{
        ...styles.navigationItem,
        ...styles,
        opacity: isCurrentPath ? 1 : 0.6,
      }}
      onPress={() => {
        router.push(path)
        onPress?.();
      }}
    >
      {icon}
    </Pressable>
  );
};

const CustomTabBar = () => {
  const isKeyboardVisible = useKeyboardVisible();
  const pathname = usePathname();
  // console.log({pathname},'PN');r
  const {handleSaveScreenPath} = useScreenContext();

  return (
    <View style={styles.tabBar}>
      {navigations.map((navigation) => {
        return (
          <NavigationItem
            key={navigation.name}
            icon={navigation.icon}
            path={navigation.href}
            isCurrentPath={pathname === navigation.href}
            onPress={() => {
              handleSaveScreenPath(navigation.href as RelativePathString);
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor:Colors.black,
    zIndex:1000,
    bottom: 0,
    left: 0,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width,
    height: 60,
    marginBlockEnd: 31,
    paddingHorizontal: 28,
  },
  navigationItem: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
export default CustomTabBar;
