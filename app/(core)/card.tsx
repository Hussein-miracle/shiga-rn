import {
  CancelIcon,
  CardIcon,
  DeleteIcon,
  EqualsCircleIcon,
  FreezeIcon,
  OptionIcon,
  ChevronLeftIcon,
} from "@/components/icons";
import CardScreenListItem from "@/components/ui/CardScreenListItem";
import CustomHeader from "@/components/ui/CustomHeader";
import CustomSwitch from "@/components/ui/CustomSwitch";
import { MINIMUM_CARD_TOP_UP_AMOUNT } from "@/constants";
import { Colors } from "@/constants/Colors";
import { useTopUpContext } from "@/context/top-up-context/top-up-context";
import { cleanStringAmount, formatStringAmount } from "@/utils";
import { useRouter } from "expo-router";
import { useMemo, useState, ReactNode, useCallback, useRef } from "react";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  FlatList,
} from "react-native";
import ReactNativeModal from "react-native-modal";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight =
  Platform.OS === "ios"
    ? Dimensions.get("window").height
    : require("react-native-extra-dimensions-android").get(
        "REAL_WINDOW_HEIGHT"
      );

export const keypads: Array<{ key: string | number | ReactNode; id: string }> =
  [
    { key: "1", id: "k1" },
    { key: "2", id: "k2" },
    { key: "3", id: "k3" },
    { key: "4", id: "k4" },
    { key: "5", id: "k5" },
    { key: "6", id: "k6" },
    { key: "7", id: "k7" },
    { key: "8", id: "k8" },
    { key: "9", id: "k9" },
    { key: ".", id: "k." },
    { key: "0", id: "k0" },
    { key: <ChevronLeftIcon width={14} height={30} />, id: "kch" },
  ];

const ButtonPad = ({
  display,
  onPress,
}: {
  display: string | ReactNode;
  onPress?: (item: string | ReactNode) => void;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress?.(display);
      }}
    >
      <View style={styles.topUpOverlayKeypad}>
        {typeof display === "string" ? (
          <Text style={styles.topUpOverlayKeypadText}>{display}</Text>
        ) : (
          display
        )}
      </View>
    </TouchableOpacity>
  );
};

export default function CardScreen() {
  const router = useRouter();
  const touchedRef = useRef<boolean>(false);
  const { virtualCardBalance, handleSaveDeductionAmount, walletBalance } =
    useTopUpContext();
  const [amountString, setAmountString] = useState<string>("0");

  const [showTopUpModal, setShowTopUpModal] = useState<boolean>(false);

  const [switched, setSwitched] = useState<boolean>(false);
  const cardActions = useMemo(() => {
    return [
      {
        title: "Card Details",
        rightComponent: (
          <TouchableOpacity>
            <OptionIcon />
          </TouchableOpacity>
        ),
        leftIcon: <CardIcon />,
      },
      {
        title: "Freeze Card",
        leftIcon: <FreezeIcon />,
        rightComponent: (
          <TouchableOpacity>
            <CustomSwitch
              switched={switched}
              onSwitch={(value: boolean) => {
                setSwitched(value);
              }}
            />
          </TouchableOpacity>
        ),
      },
      {
        title: "Delete Card",
        leftIcon: <DeleteIcon />,
        rightComponent: null,
      },
    ];
  }, []);

  const isEnabled = useMemo(() => {
    return amountString.length > 0 &&
      amountString[0] !== "0" &&
      walletBalance >= cleanStringAmount(amountString)
      ? true
      : false;
  }, [amountString, walletBalance]);

  const onOpenShowTopUpModal = () => {
    setShowTopUpModal(true);
  };

  const onCloseShowTopUpModal = () => {
    setShowTopUpModal(false);
  };

  const parseStringAmountInput = useCallback(
    (item: string | ReactNode) => {
      const numbers = [...amountString].filter(
        (item) => typeof item === "string" && !isNaN(Number(item))
      );
      // console.log({ numbers }, "NNN");
      if (numbers.length === 6 && typeof item === "string") return;

      if (typeof item === "string") {
        if (item === "." && !amountString.includes(".")) {
          setAmountString(amountString + item);
          return;
        }

        if (
          item === "0" &&
          amountString.length === 1 &&
          amountString[0] === "0"
        ) {
          return;
        }

        if (
          item !== "0" &&
          amountString.length === 1 &&
          amountString[0] === "0"
        ) {
          setAmountString(item);
          return;
        }

        if (item === "." && amountString.includes(".")) return;

        setAmountString(amountString + item);
      } else {
        const newAmountString = [...amountString].join("").slice(0, -1);
        // console.log({amountString, newAmountString})
        if (newAmountString.trim().length <= 0) {
          setAmountString("0");
        } else {
          setAmountString(newAmountString);
        }
      }
    },
    [amountString]
  );

  const handleUseMax = useCallback(() => {
    setAmountString(formatStringAmount(walletBalance));
  }, [walletBalance]);

  const handleContinue = useCallback(() => {

    // console.log({amountString});

    handleSaveDeductionAmount(cleanStringAmount(amountString));

    router.push("/(core)/confirm-withdrawal-detail");
  }, [amountString]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.black,
      }}
    >
      <CustomHeader />
      <View style={styles.cardScreenTopContainer}>
        <View style={styles.cardScreenTopHeader}>
          <View>
            <Text style={styles.cardScreenAmountText}>
              ${formatStringAmount(virtualCardBalance)}
            </Text>
          </View>
          <View>
            <Text style={styles.cardScreenAmountSubText}>
              Available to spend
            </Text>
          </View>
        </View>
        <View style={styles.cardScreenTopContent}>
          <View style={styles.cardScreenCard}>
            <ImageBackground
              style={StyleSheet.absoluteFill}
              source={require("@/assets/images/card-background.png")}
            />
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Image
                width={35}
                height={33.5}
                source={require("@/assets/images/shiga-card-logo.png")}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontFamily: "medium",
                  fontWeight: "500",
                  fontSize: 16,
                }}
              >
                •••• 5453
              </Text>

              <View>
                <Image
                  width={72}
                  height={36.36}
                  source={require("@/assets/images/shiga-card-issuer-image.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardScreenActions}>
          <Pressable
            style={styles.cardScreenAction}
            onPress={onOpenShowTopUpModal}
          >
            <Text style={styles.cardScreenActionText}>Top Up</Text>
          </Pressable>

          <Pressable style={styles.cardScreenAction}>
            <Text style={styles.cardScreenActionText}>Withdraw</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.cardScreenListContainer}>
        <View style={styles.cardScreenListContainerHeader}>
          <Text style={styles.cardScreenListContainerHeaderTitle}>
            Manage CARD
          </Text>
        </View>
        <View>
          {cardActions.map((action, index) => {
            return (
              <CardScreenListItem
                key={index}
                title={action.title}
                rightComponent={action.rightComponent}
                leftIcon={action.leftIcon}
              />
            );
          })}
        </View>
      </View>

      <ReactNativeModal
        hasBackdrop={false}
        isVisible={showTopUpModal}
        style={{
          overflow: "hidden",
          backgroundColor: Colors.black,
        }}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}
        // coverScreen={false}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.black,
            }}
          >
            <View style={styles.topUpOverlayHeader}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "500",
                  fontFamily: "medium",
                  color: Colors.white,
                }}
              >
                Top up
              </Text>

              <TouchableOpacity onPress={onCloseShowTopUpModal}>
                <View>
                  <CancelIcon />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.topUpOverlayCardContainer}>
              <View style={styles.topUpOverlayAmountCard}>
                <View style={styles.topUpOverlayAmountCardTop}>
                  <View style={styles.topUpOverlayAmountCardTopContent}>
                    <View style={styles.amountCardCurrencyImageWrapper}>
                      <Image
                        source={require("@/assets/icons/us.png")}
                        style={styles.amountCardCurrencyImage}
                      />
                    </View>

                    <View
                      style={{
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "regular",
                          fontSize: 16,
                          fontWeight: "400",
                          color: Colors.white,
                        }}
                      >
                        US Dollar
                      </Text>
                      <Text
                        style={{
                          color: Colors.subtext,
                          fontSize: 14,
                          fontWeight: "500",
                          fontFamily: "medium",
                        }}
                      >
                        ${formatStringAmount(walletBalance)}
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity onPress={handleUseMax}>
                    <View style={styles.maxActionButton}>
                      <Text style={styles.maxActionButtonText}>Use Max</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.topUpOverlayAmountCardBottom}>
                  <View style={styles.topUpOverlayAmountTextContainer}>
                    <View>
                      <Text
                        style={{
                          fontWeight: "500",
                          fontSize: 36,
                          verticalAlign: "middle",
                          marginTop: -15,
                          color: Colors.white,
                        }}
                      >
                        $
                      </Text>
                    </View>
                    <Text style={styles.topUpOverlayAmountText}>
                      {formatStringAmount(amountString)}
                    </Text>
                  </View>
                  <View style={styles.topUpOverlayAmountSubtextContainer}>
                    {walletBalance < cleanStringAmount(amountString) &&
                      touchedRef.current && (
                        <Text
                          style={{
                            ...styles.topUpOverlayAmountSubtext,
                            color: Colors.warn,
                          }}
                        >
                          Not enough USD 😏
                        </Text>
                      )}

                    {cleanStringAmount(amountString) <
                      MINIMUM_CARD_TOP_UP_AMOUNT &&
                      touchedRef.current && (
                        <Text
                          style={{
                            ...styles.topUpOverlayAmountSubtext,
                            color: Colors.warn,
                          }}
                        >
                          Minimum amount is $5
                        </Text>
                      )}
                    {((cleanStringAmount(amountString) >=
                      MINIMUM_CARD_TOP_UP_AMOUNT &&
                      cleanStringAmount(amountString) <= walletBalance) ||
                      (touchedRef.current === false &&
                        cleanStringAmount(amountString) === 0)) && (
                      <>
                        <EqualsCircleIcon />
                        <Text style={styles.topUpOverlayAmountSubtext}>
                          ${formatStringAmount(amountString)}
                        </Text>
                      </>
                    )}
                  </View>
                </View>
              </View>

              {/* card type */}
              <View style={styles.topUpOverlayAmountCardType}>
                <View
                  style={{
                    width: 42,
                    height: 42,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("@/assets/icons/virtual-card-icon.png")}
                  />
                </View>

                <View>
                  <Text
                    style={{
                      color: Colors.subtext,
                      fontWeight: "500",
                      fontSize: 14,
                      fontFamily: "medium",
                    }}
                  >
                    For
                  </Text>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 16,
                      fontFamily: "regular",
                      color: Colors.white,
                    }}
                  >
                    Virtual Card
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <FlatList
                numColumns={3}
                style={{ flexGrow: 0 }}
                scrollEnabled={false}
                columnWrapperStyle={{
                  gap: 18,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                contentContainerStyle={styles.topUpOverlayKeypadContainer}
                data={keypads}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <ButtonPad
                      display={item.key}
                      onPress={(value) => {
                        touchedRef.current = true;
                        if (value) {
                          parseStringAmountInput(value);
                        }
                      }}
                    />
                  );
                }}
              />
              <View style={styles.topUpOverlayBottom}>
                <Pressable
                  disabled={!isEnabled}
                  style={{
                    ...styles.actionButton,
                    opacity: isEnabled ? 1 : 0.6,
                  }}
                  onPress={handleContinue}
                >
                  <Text style={styles.actionButtonText}>Continue</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ReactNativeModal>
    </View>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: "100%",
    height: 46,

    paddingVertical: 10.5,
    paddingHorizontal: 20,
  },
  actionButtonText: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: "400",
    fontFamily: "regular",
  },
  topUpOverlay: {},
  maxActionButtonText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: "400",
    fontFamily: "regular",
  },
  maxActionButton: {
    backgroundColor: Colors.iconContainer,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  amountCardCurrencyImageWrapper: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  amountCardCurrencyImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  topUpOverlayAmountCardTopContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  topUpOverlayAmountCardTop: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topUpOverlayAmountText: {
    fontSize: 64,
    fontWeight: "500",
    fontFamily: "medium",
    color: Colors.white,
  },
  topUpOverlayAmountTextContainer: {
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    flexDirection: "row",
    // letterSpacing:-25,
  },
  topUpOverlayAmountSubtext: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "regular",
    color: Colors.white,
  },
  topUpOverlayAmountSubtextContainer: {
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    gap: 6,
    flexDirection: "row",
  },
  topUpOverlayAmountCardBottom: {
    paddingVertical: 38,
    // backgroundColor: "red",
    height: 200,
  },
  topUpOverlayAmountCard: {
    backgroundColor: Colors.background,
    width: "100%",
    // height: 253,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.inputField,
  },
  topUpOverlayAmountCardType: {
    borderWidth: 1,
    borderColor: Colors.inputField,
    backgroundColor: Colors.background,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    height: 66,
    borderRadius: 16,
    flexDirection: "row",
    gap: 12,
  },
  topUpOverlayKeypadText: {
    fontSize: 22,
    fontWeight: "400",
    fontFamily: "regular",
    color: Colors.white,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  topUpOverlayKeypad: {
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    // backgroundColor: Colors.pastelOrange,
  },
  topUpOverlayKeypadContainer: {
    width: "100%",
    paddingHorizontal: 18,
    // backgroundColor: Colors.pastelBlue,
    // height: 254,

    // marginTop: 10,
    gap: 20,

    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  topUpOverlayBottom: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  topUpOverlayCardContainer: {
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  topUpOverlayHeader: {
    width: "100%",
    paddingVertical: 13.5,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardScreenListContainer: {
    width: "100%",
    // backgroundColor:Colors.pink,
  },
  cardScreenListContainerHeaderTitle: {
    color: Colors.subtext,
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "regular",
    textTransform: "uppercase",
  },
  cardScreenListContainerHeader: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  cardScreenCardBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 195,
  },
  cardScreenCard: {
    width: "100%",
    height: 195,
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderColor: Colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    overflow: "hidden",
    justifyContent: "space-between",
    ...Platform.select({
      ios: {
        shadowColor: "#fff",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.24,
        shadowRadius: 10.65,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  cardScreenTopContent: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: "100%",
  },
  cardScreenTopContainer: {
    gap: 16,
    width: "100%",
  },
  cardScreenTopHeader: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardScreenAmountText: {
    fontWeight: "500",
    fontSize: 40,
    color: Colors.white,
    fontFamily: "medium",
  },
  cardScreenAmountSubText: {
    fontWeight: "500",
    fontSize: 14,
    color: Colors.subtext,
    fontFamily: "medium",
  },
  cardScreenActions: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 17,
  },
  cardScreenAction: {
    backgroundColor: Colors.grey,
    height: 46,
    paddingVertical: 10.5,
    paddingHorizontal: 35,
    borderRadius: 30,
    // width:139,
  },
  cardScreenActionText: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: "regular",
    textAlign: "center",
  },
});
