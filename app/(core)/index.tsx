import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Colors } from "@/constants/Colors";
import CustomHeader from "@/components/ui/CustomHeader";
import {
  BankIcon,
  BusinessIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OptionIcon,
  ScanIcon,
  ScholarFillIcon,
  SendIcon,
  SwapIcon,
} from "@/components/icons";
import HomeActionItem from "@/components/ui/HomeActionItem";
import HomeListItem from "@/components/ui/HomeListItem";
import { formatStringAmount } from "@/utils";
import { useTopUpContext } from "@/context/top-up-context/top-up-context";

const shigaFeatures = [
  {
    title:"Convert Money",
    description:"Swap between currencies",
    rightIcon:<OptionIcon/>,
    leftIcon:<SwapIcon/>,
  },
  {
    title:"Tuition payment ",
    description:"Pay your tuition in seconds",
    rightIcon:<ChevronRightIcon/>,
    leftIcon:<ScholarFillIcon/>,
  },
  {
    title:"Pay a Merchant",
    description:"Pay your suppliers globally",
    rightIcon:<ChevronRightIcon/>,
    leftIcon:<BusinessIcon/>,
  },
]

export default function HomeScreen() {
  const {walletBalance} = useTopUpContext();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.black,
      }}
    >
      <CustomHeader
        title="Home"
        headerRightComponent={() => {
          return (
            <TouchableOpacity>
              <ScanIcon />
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.mainScreenContainer}>
        <View style={styles.mainScreen}>
          <View style={styles.mainScreenTop}>
            <View>
              <Text style={styles.mainScreenTopTitle}>USD Balance</Text>
            </View>

            <TouchableOpacity>
              <View style={styles.mainScreenTopSelect}>
                <View style={styles.selectImageContainer}>
                  <Image
                    style={styles.selectImage}
                    source={require("@/assets/icons/us.png")}
                  />
                </View>

                <ChevronDownIcon style={{ marginTop: 8 }} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.mainScreenAmount}>
            <Text style={styles.mainScreenAmountText}>${formatStringAmount(walletBalance)}</Text>
          </View>

          <View style={styles.mainScreenActions}>
            <Pressable style={styles.mainScreenAction}>
              <Text style={styles.mainScreenActionText}>Add Money</Text>
            </Pressable>

            <Pressable style={styles.mainScreenAction}>
              <Text style={styles.mainScreenActionText}>Transfer</Text>
            </Pressable>
          </View>

          <View style={styles.mainScreenBottom}>
            <HomeActionItem title="Bank Account" subText="Show account info">
              <BankIcon width={30} height={30} />
              <View style={styles.backActionImageContainer}>
                <Image
                  style={styles.backActionImage}
                  source={require("@/assets/icons/us.png")}
                />
              </View>
            </HomeActionItem>
            <HomeActionItem title="Pay Bills" subText="Top-Up & utilities">
              <SendIcon width={24} height={24} />
            </HomeActionItem>
          </View>
        </View>
      </View>

      <View style={styles.listScreenContainer}>
        <View style={styles.listScreenContainerHeader}>
          <Text style={styles.listScreenContainerHeaderTitle}>
            Do more with Shiga
          </Text>
        </View>
        <View>
          {shigaFeatures.map((feature, index) => {
            return (
              <HomeListItem
                key={index}
                title={feature.title}
                subText={feature.description}
                rightIcon={feature.rightIcon}
                leftIcon={feature.leftIcon}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listScreenContainer: {
    width: "100%",
    // backgroundColor:Colors.pink,
  },
  listScreenContainerHeaderTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "medium",
  },
  listScreenContainerHeader: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  backActionImageContainer: {
    position: "absolute",
    bottom: 1,
    right: 1,
    backgroundColor: "#171819",

    width: 22,
    height: 22,
    padding: 3,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  backActionImage: {
    width: 17,
    height: 17,
    borderRadius: 7.5,
    objectFit: "fill",
  },
  mainScreenBottom: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    gap: 12,
    // justifyContent:"space-between",
  },
  mainScreenContainer: {
    paddingHorizontal: 20,
    // backgroundColor:Colors.placeholder,
  },
  mainScreen: {
    width: "100%",
    height: 400,
    paddingTop: 16,
    // backgroundColor:"red",
  },
  mainScreenTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  mainScreenTopTitle: {
    fontFamily: "regular",
    fontWeight: "400",
    color: Colors.white,
    fontSize: 16,
  },
  mainScreenTopSelect: {
    backgroundColor: Colors.black100,
    height: 30,
    width: 56,
    borderRadius: 16,
    paddingVertical: 5,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
  },
  selectImageContainer: {},
  selectImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    objectFit: "cover",
  },
  mainScreenAmount: {
    marginTop: 12,
    paddingHorizontal: 16,
  },
  mainScreenAmountText: {
    fontFamily: "medium",
    fontWeight: "500",
    color: Colors.white,
    fontSize: 38,
    textAlign: "left",
  },
  mainScreenActions: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 17,
  },
  mainScreenAction: {
    backgroundColor: Colors.grey,
    height: 46,
    paddingVertical: 10.5,
    paddingHorizontal: 35,
    borderRadius: 30,
  },
  mainScreenActionText: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: "regular",
    textAlign: "center",
  },
});
