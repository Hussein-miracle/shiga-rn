import { CalendarIcon, SearchIcon } from "@/components/icons";
import CustomHeader from "@/components/ui/CustomHeader";
import { Colors } from "@/constants/Colors";
import { transactionData } from "@/data";
import { Transaction, TransactionByDate } from "@/types";
import { useMemo, useState } from "react";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import TransactionListItem from "@/components/ui/TransactionListItem";
dayjs.extend(isToday);

const ListItem = ({
  transactionsByDate: { date, transactions, created_on },
}: {
  transactionsByDate: TransactionByDate;
}) => {
  return (
    <View style={{}}>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 24,
          paddingTop: 12,
          paddingBottom: 16,
        }}
      >
        <Text
          style={{
            fontWeight: "400",
            color: Colors.white,
            fontSize: 16,
            fontFamily: "regular",
          }}
        >
          {dayjs(created_on).isToday() === true ? "Today" : date}
        </Text>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        // contentContainerStyle={{gap:8}}
        renderItem={({ item }) => {
          return <TransactionListItem transaction={item} />;
        }}
      />
    </View>
  );
};

export default function TransactionsScreen() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTransactionData = useMemo(() => {
    return transactionData.filter(
      (t) =>
        t.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t?.user?.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t?.user?.first_name
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        t?.user?.last_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t?.amount.toString().includes(searchQuery) ||         t?.currency_name?.toString().includes(searchQuery)
    ); 
  }, [searchQuery, transactionData]);

  const dateGroupedTransactions = useMemo(() => {
    const transactionsByDate: Record<string, Transaction[]> = {};

    filteredTransactionData.forEach((transaction) => {
      const date = dayjs(transaction.created_on).format("MMMM YYYY");
      if (!transactionsByDate[date]) {
        transactionsByDate[date] = [];
      }
      transactionsByDate[date].push(transaction);
    });

    const entries = Object.entries(transactionsByDate);
    const mappedEntries = entries.map(([date, transactions]) => {
      const sortedTransactions = transactions.sort((a, b) =>
        dayjs(b.created_on).diff(dayjs(a.created_on))
      );

      return {
        date,
        created_on: sortedTransactions[0].created_on,
        transactions: sortedTransactions,
      };
    });

    const sortedEntries = mappedEntries.sort((a, b) =>
      dayjs(b.date, "DD/MM/YY").diff(dayjs(a.date, "DD/MM/YY"))
    );
    return sortedEntries;
  }, [filteredTransactionData]);

  // console.log({ dateGroupedTransactions }, "DGT");

  return (
    <View style={{ flex: 1, backgroundColor: Colors.black }}>
      <CustomHeader
        title="Transactions"
        headerRightComponent={() => {
          return (
            <TouchableOpacity>
              <CalendarIcon />
            </TouchableOpacity>
          );
        }}
      />

      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        ListHeaderComponent={
          <>
            <View style={styles.listHeader}>
              <View style={styles.listHeaderInputContainer}>
                <TextInput
                  placeholder="Search Transactions"
                  style={styles.listHeaderInput}
                  value={searchQuery}
                  onChangeText={(text) => {
                    setSearchQuery(text);
                  }}
                  placeholderTextColor={Colors.placeholder}
                  selectionColor={Colors.white} // Changes the cursor color
                  cursorColor={Colors.white}
                />

                <View style={styles.listHeaderInputIcon}>
                  <SearchIcon width={20} height={20} />
                </View>
              </View>
            </View>
          </>
        }
        data={dateGroupedTransactions}
        keyExtractor={(item) => item.date.toString()}
        renderItem={({ item }) => {
          return <ListItem transactionsByDate={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listHeader: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  listHeaderInputContainer: {
    width: "100%",
    height: 46,
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
    backgroundColor: Colors.inputField,
  },
  listHeaderInputIcon: { position: "absolute", left: 14, top: 12 },
  listHeaderInput: {
    width: "100%",
    height: "100%",
    paddingLeft: 38,
    color: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "regular",
  },
});
