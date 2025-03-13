import CustomHeader from "@/components/ui/CustomHeader";
import CustomTabBar from "@/components/ui/CustomTabBar";
import { Colors } from "@/constants/Colors";
import { StyleSheet, Image, Platform, View, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.black,
      }}
    >
      <CustomHeader title="Profile" />
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
