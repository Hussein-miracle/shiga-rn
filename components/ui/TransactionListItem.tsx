import { Colors } from "@/constants/Colors";
import { Transaction } from "@/types";
import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Pressable,
} from "react-native";
import {
  HalfSunIcon,
  ReceiveIcon,
  RefundIcon,
  SpentCardIcon,
  WarnIcon,
} from "../icons";
import { LinearGradient } from "expo-linear-gradient";
import { formatStringAmount } from "@/utils";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const SWIPE_SIZE = -68 * 1.35;

const TransactionListItem = ({ transaction }: { transaction: Transaction }) => {
  const translateX = useSharedValue(0);
  const cornerRadius = useSharedValue(0);
  // const {} = usePanGestureHandler();

  const backgroundColor = useMemo(() => {
    if (
      transaction.type === "received_institution" ||
      transaction.type === "reversal" ||
      transaction.type === "spent"
    ) {
      return Colors.iconContainer;
    } else if (transaction.type === "received_individual") {
      return Colors.pastelOrange;
    } else if (transaction.type === "declined") {
      return Colors.dangerBg;
    } else if (transaction.type === "top-up") {
      return Colors.success;
    }
    return undefined;
  }, [transaction.type]);

  const icon = useMemo(() => {
    if (transaction.type === "declined") {
      return <WarnIcon />;
    } else if (transaction.type === "received_institution") {
      return <ReceiveIcon />;
    } else if (transaction.type === "reversal") {
      return <RefundIcon />;
    } else if (transaction.type === "spent") {
      return <SpentCardIcon />;
    } else if (transaction.type === "top-up") {
      return (
        <View
          style={{
            width: 42,
            height: 42,
            borderRadius: 22,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <LinearGradient
            style={StyleSheet.absoluteFill}
            colors={["#46CD69", "#32AB51"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <LinearGradient
              style={StyleSheet.absoluteFill}
              colors={["rgba(0, 0, 0, 0.01)", "rgba(0, 0, 0, 0.01)"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
            />
          </LinearGradient>

          <ReceiveIcon />
        </View>
      );
    } else if (!!transaction?.imageUrl) {
      return (
        <View
          style={{
            width: 42,
            height: 42,
            borderRadius: 22,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Image source={transaction?.imageUrl as ImageSourcePropType} />
        </View>
      );
    } else if (transaction.type === "sent" && !transaction?.imageUrl) {
      return (
        <View
          style={{
            backgroundColor: Colors.pastelBlue,
            width: 42,
            height: 42,
            borderRadius: 22,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textTransform: "uppercase",
              fontSize: 22,
              fontWeight: "700",
              fontFamily: "bold",
            }}
          >
            {transaction?.user?.first_name?.charAt(0)}
            {transaction?.user?.last_name?.charAt(0)}
          </Text>
        </View>
      );
    } else if (
      transaction.type === "received_individual" &&
      !transaction?.imageUrl
    ) {
      return (
        <View
          style={{
            backgroundColor: Colors.pastelOrange,
            width: 42,
            height: 42,
            borderRadius: 22,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textTransform: "uppercase",
              fontSize: 22,
              fontWeight: "700",
              fontFamily: "bold",
            }}
          >
            {transaction?.user?.first_name?.charAt(0)}
            {transaction?.user?.last_name?.charAt(0)}
          </Text>
        </View>
      );
    }

    return null;
  }, [transaction.imageUrl, transaction.type]);

  const transactionSubText = useMemo(() => {
    if (transaction.type === "received_institution") {
      return "Received from bank";
    } else if (transaction.type === "received_individual") {
      return "Received from";
    } else if (transaction.type === "sent") {
      return "Sent to bank";
    } else if (transaction.type === "declined") {
      return "Card declined at";
    } else if (transaction.type === "reversal") {
      return "Reversal for";
    } else if (transaction.type === "top-up") {
      return "Balance Top up for";
    } else if (transaction.type === "spent") {
      return "Spent on";
    }

    return "";
  }, [transaction.type]);

  const mainText = useMemo(() => {
    if (
      transaction.type === "sent" ||
      transaction.type === "received_institution"
    ) {
      if (transaction?.user?.username && !transaction?.imageUrl) {
        return transaction?.user?.username;
      }

      if (!!transaction?.user?.first_name && !!transaction?.user?.last_name) {
        return `${transaction?.user?.first_name} ${transaction?.user?.last_name}`;
      }
    } else if (transaction.type === "declined") {
      return transaction?.service;
    } else if (transaction.type === "reversal") {
      return `Ref_${transaction?.user?.first_name} ${transaction?.user?.last_name}...`;
    } else if (transaction.type === "top-up") {
      return transaction?.currency_name;
    } else if (transaction.type === "spent") {
      return transaction?.service;
    } else if (transaction.type === "received_individual") {
      return transaction?.user?.username;
    }
    return "";
  }, [transaction?.type, transaction?.user]);

  const amountTextColor = useMemo(() => {
    if (
      transaction?.type === "sent" ||
      transaction?.type === "spent" ||
      transaction?.type === "declined"
    ) {
      return Colors.subtext;
    }

    if (
      transaction.type === "top-up" ||
      transaction?.type === "reversal" ||
      transaction?.type === "received_individual" ||
      transaction?.type === "received_institution"
    ) {
      return Colors.success;
    }
    return undefined;
  }, []);

  const prefix = useMemo(() => {
    return transaction?.type.startsWith("received_") ||
      transaction.type === "top-up" ||
      transaction.type === "reversal"
      ? `+ `
      : "";
  }, [transaction.type]);

  const swipeGesture = Gesture.Pan()
    .onUpdate((event) => {
      // console.log({ eventTransX: event.translationX }, "XXX");

      // if(event.x )
      if (
        event.translationX <= 0 &&
        Math.abs(SWIPE_SIZE) >= Math.abs(event.translationX)
      ) {
        translateX.value = event.translationX;
        cornerRadius.value = Math.abs(event.translationX / 9);
      }
    })
    .onEnd((_event) => {
      translateX.value = withSpring(withTiming(0, { duration: 1000 }), {
        damping: 0.25,
      });
      cornerRadius.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => {
    "worklet";
    return {
      transform: [{ translateX: translateX.value }],
      borderRadius: cornerRadius.value,
    };
  });

  return (
    <GestureHandlerRootView>
      <Pressable style={{}}>
        <GestureDetector gesture={swipeGesture}>
          <Animated.View style={[styles.transactionListItemView]}>
            <Animated.View style={[styles.transactionListItem, animatedStyle]}>
              <View style={styles.transactionListItemContentLeft}>
                <View
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 22,
                    backgroundColor,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </View>

                <View>
                  <Text
                    style={{
                      color: Colors.subtext,
                      fontSize: 14,
                      fontWeight: "500",

                      fontFamily: "regular",
                    }}
                  >
                    {transactionSubText}
                  </Text>
                  <Text
                    style={{
                      color: Colors.white,
                      fontFamily: "regular",
                      fontSize: 16,
                      textTransform:
                        transaction?.type === "spent" ? "uppercase" : undefined,
                    }}
                  >
                    {mainText}
                  </Text>
                </View>
              </View>
              <View style={styles.transactionListItemContentRight}>
                <Text
                  style={{
                    textDecorationLine:
                      transaction?.type === "declined"
                        ? "line-through"
                        : undefined,
                    color: amountTextColor,
                  }}
                >
                  {prefix}
                  {transaction?.currency_symbol}
                  {formatStringAmount(transaction?.amount)}
                </Text>
              </View>
            </Animated.View>

            <View style={styles.swipedContainer}>
              <HalfSunIcon />
            </View>
          </Animated.View>
        </GestureDetector>
      </Pressable>
    </GestureHandlerRootView>
  );
};

export default TransactionListItem;

const styles = StyleSheet.create({
  swipedContainer: {
    // ...StyleSheet.absoluteFillObject,
    paddingHorizontal: 22,
    backgroundColor: Colors.swipeBg,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    height: 74,
    zIndex: 0,
    borderRadius: 12,
  },
  transactionListItemView: {
    position: "relative",
    height: 75,
    width: "100%",
    backgroundColor: Colors.black,
    overflow: "hidden",
  },
  transactionListItem: {
    zIndex: 5,
    position: "absolute",
    height: 74,
    width: "100%",
    backgroundColor: Colors.black,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  transactionListItemContentRight: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  transactionListItemContentLeft: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:"space-between",
    gap: 12,
  },
});
