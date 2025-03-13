import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";
import { Pressable, View ,Text, StyleSheet} from "react-native";

const HomeActionItem = ({
  title,
  subText,
  children,
  onPress,
}: {
  title: string;
  subText: string;
  children?: ReactNode;
  onPress?: () => void;
}) => {
  return (
    <View style={styles.actionItem}>
      <Pressable style={styles.actionItemTop} onPress={onPress}>
        {children}
      </Pressable>
      <View style={styles.actionItemBottom}>
        <Text style={styles.actionItemTitle}>{title}</Text>
        <Text style={styles.actionItemSubtitle}>{subText}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  actionItem: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "flex-start",
    // width:("5 - 17),
    // backgroundColor: Colors.black100,
    width: "auto",
    flex: 1,
    height: 176,
    position: "relative",
  },
  actionItemTop: {
    width: 56,
    height: 56,
    borderRadius: 27,
    backgroundColor: Colors.placeholder,
    alignItems: "center",
    justifyContent: "center",
  },
  actionItemBottom: {
    alignItems: "flex-start",
  },
  actionItemTitle: {
    color: Colors.white,
    fontWeight: "400",
    fontSize: 16,
    fontFamily: "regular",
  },
  actionItemSubtitle: {
    color: Colors.subtext,
    fontWeight: "500",
    fontSize: 14,
    fontFamily: "medium",
  },
})

export default HomeActionItem;