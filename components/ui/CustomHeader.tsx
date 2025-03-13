import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "@/constants/Colors";

const CustomHeader = ({
  headerRightComponent,
  title,
}: {
  headerRightComponent?: ReactNode | (() => React.JSX.Element);
  title?: string;
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeftContent}>
        <View style={styles.user}>
          <Text style={styles.userText}>CC</Text>
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>

      {typeof headerRightComponent === "function"
        ? headerRightComponent?.()
        : headerRightComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 64,
    backgroundColor: Colors.black,
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerLeftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  user: {
    backgroundColor: Colors.pink,
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    width: 32,
    padding: 3,
    borderRadius: 16,
  },
  userText: {
    fontWeight: "500",
    fontSize: 16,
    color: Colors.black,
    fontFamily: "bold",
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
    color: Colors.white,
    fontFamily: "medium",
  },
});

export default CustomHeader;
