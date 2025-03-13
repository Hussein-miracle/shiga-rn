import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useTopUpContext } from "@/context/top-up-context/top-up-context";
import { TransactionCompletedIcon } from "@/components/icons";
import { formatStringAmount } from "@/utils";
import { useScreenContext } from "@/context/screen-navigation-context/screen-navigation-context";
import { useRouter } from "expo-router";

const TransactionStatus = () => {
  const router = useRouter();
  const { amountToDeduct, handleSaveDeductionAmount } = useTopUpContext();
  const {handleSaveScreenPath,handleSetUseSavedPath} = useScreenContext();
  const handleDone = () => {

    handleSaveDeductionAmount(0);
    handleSetUseSavedPath(false);
    router.replace("/");
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.black,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TransactionCompletedIcon />
          <View
            style={{
              width: "100%",
              // backgroundColor: Colors.dangerBg,
              paddingVertical: 20,
              paddingHorizontal: 48,
            }}
          >
            <Text
              style={{
                color: Colors.white,
                fontSize: 28,
                fontWeight: "500",
                fontFamily: "medium",
                textAlign: "center",
                textTransform:"uppercase"
              }}
            >
              Completed
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: Colors.subtext,
                fontSize: 16,
                fontWeight: "500",
                fontFamily: "medium",
              }}
            >
              You withdrew ${formatStringAmount(amountToDeduct)} from your
              Virtual Card
            </Text>
          </View>
        </View>
        <View style={styles.confirmBottom}>
          <TouchableOpacity onPress={handleDone} style={{ width: "100%" }}>
            <View
              style={{
                ...styles.confirmButton,
              }}
            >
              <Text style={styles.confirmButtonText}>Done</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmBottom: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  confirmButton: {
    backgroundColor: Colors.placeholder,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: "100%",
    height: 46,

    paddingVertical: 10.5,
    paddingHorizontal: 20,
  },
  confirmButtonText: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: "400",
    fontFamily: "regular",
  },
});

export default TransactionStatus;
