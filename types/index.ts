import { ImageSourcePropType } from "react-native";

export type Transaction = {
  type:
    | "declined"
    | "received_institution"
    | "received_individual"
    | "sent"
    | "reversal"
    | "top-up"
    | "spent";
  amount: number;
  currency_symbol: string;
  description?: string;
  user?: {
    first_name?: string;
    last_name?: string;
    username?: string;
  };
  created_on: string;
  service?: string;
  imageUrl?: string | ImageSourcePropType;
  id: string;
  currency_name?: string;
};

export type TransactionByDate = {
  date: string;
  created_on: string;
  transactions: Array<Transaction>;
};
