import { View, Platform, StatusBar } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Slot } from "expo-router";
import CustomTabBar from "@/components/ui/CustomTabBar";
import ScreenContextProvider from "@/context/screen-navigation-context/screen-navigation-context";
import TopUpContextProvider from "@/context/top-up-context/top-up-context";

const CoreLayout = () => {
  return (
    <ScreenContextProvider>
      <TopUpContextProvider>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.black,
            paddingVertical:
              Platform.OS === "ios" ? 50 : StatusBar.currentHeight,
          }}
        >
          <Slot />
          <CustomTabBar />
        </View>
      </TopUpContextProvider>
    </ScreenContextProvider>
  );
};

export default CoreLayout;
