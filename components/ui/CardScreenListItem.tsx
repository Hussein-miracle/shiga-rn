import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

const CardScreenListItem = ({
  title,
  leftIcon,
  rightComponent,
}: {
  title: string;
  leftIcon?: ReactNode;
  rightComponent?: ReactNode;
  onPress?: () => void;
}) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.listItemLeft}>
        <View style={styles.listItemLeftIconContainer}>{leftIcon}</View>
        <View style={styles.listItemContent}>
          <Text style={styles.listItemTitle}>{title}</Text>
        </View>
      </View>

      <View style={styles.listItemRight}>{rightComponent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemRight: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 11,
  },
  listItem: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  listItemLeftIconContainer: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: Colors.lightBlue,
  },
  listItemContent: {
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  listItemTitle: {
    color: Colors.white,
    fontWeight: "400",
    fontSize: 16,
    fontFamily: "regular",
  },
  listItemSubtitle: {
    color: Colors.subtext,
    fontWeight: "500",
    fontSize: 14,
    fontFamily: "medium",
  },
});

export default CardScreenListItem;
