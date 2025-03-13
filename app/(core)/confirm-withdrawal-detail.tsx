import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { ChevronLeftIcon, ConfirmSendIcon } from "@/components/icons";
import { useRouter } from "expo-router";
import { useTopUpContext } from "@/context/top-up-context/top-up-context";
import { formatStringAmount } from "@/utils";

const DetailRow = ({
  leftText,
  rightText,
}: {
  leftText: string;
  rightText: string;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingVertical: 10,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          fontFamily: "medium",
          color: Colors.subtext,
        }}
      >
        {leftText}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "400",
          fontFamily: "regular",
          color: Colors.white,
        }}
      >
        {rightText}
      </Text>
    </View>
  );
};

const ConfirmWithdrawalDetail = () => {
  const { amountToDeduct, handleAddFromWalletToCard } = useTopUpContext();
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  // console.log({amountToDeduct},"AMD")

  const handleConfirm = () => {
    handleAddFromWalletToCard(amountToDeduct);
    router.push("/transaction-status");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.black,
        // justifyContent:"space-between"
      }}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <ChevronLeftIcon />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 24,
          // backgroundColor: "red",
          paddingTop: 38,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.iconContainer,
            height: 64,
            width: 64,
            borderRadius: 32,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ConfirmSendIcon />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "500",
              fontFamily: "medium",
              color: Colors.white,
            }}
          >
            Confirm Details for
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "500",
              fontFamily: "medium",
              color: Colors.white,
            }}
          >
            Virtual Card Creation
          </Text>
        </View>
        <View style={{ marginTop: 28, width: "100%" }}>
          <DetailRow
            leftText="You will receive"
            rightText={`$${formatStringAmount(amountToDeduct)}`}
          />
          <DetailRow leftText="Issuance Fee" rightText="$1" />
          <DetailRow leftText="Transaction Type" rightText="Card Top Up" />
          <DetailRow
            leftText="Total Debit"
            rightText={`$${formatStringAmount(amountToDeduct + 1)}`}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: 145,
        }}
      >
        <View
          style={{
            paddingHorizontal: 24,
            paddingVertical: 16,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 24,
          }}
        >
          <Text
            style={{
              color: Colors.subtext,
              fontSize: 12,
              textAlign: "center",
            }}
          >
            Please note once this you tap “Confirm & Pay” this transaction
            cannot be reversed
          </Text>
        </View>

        <View style={styles.confirmBottom}>
          <TouchableOpacity onPress={handleConfirm} style={{ width: "100%" }}>
            <View
              style={{
                ...styles.confirmButton,
              }}
            >
              <Text style={styles.confirmButtonText}>Confirm & Pay</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmButton: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: "100%",
    height: 46,

    paddingVertical: 10.5,
    paddingHorizontal: 20,
  },
  header: {
    height: 64,
    backgroundColor: Colors.black,
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
    marginBottom: 24,
  },
  content: {
    marginTop: 36,
    paddingHorizontal: 32,
    gap: 20,
  },
  confirmBottom: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmButtonText: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: "400",
    fontFamily: "regular",
  },
});

export default ConfirmWithdrawalDetail;
