// date:"2025-03-12T17:14:39.260Z"

import { Transaction } from "@/types";

export const transactionData: Array<Transaction> = [
  {
    type: "declined",
    service: "Neftlix",
    currency_symbol: "$",
    amount: 8.79,
    created_on: "2025-03-12T17:14:39.260Z",
    id: "sfgfgrwe",
  },
  {
    type: "declined",
    service: "Neftlix",
    currency_symbol: "$",
    amount: 8.79,
    created_on: "2025-03-12T17:14:39.260Z",
    id: "4rtegdfg",
  },
  {
    type: "received_institution",
    service: "Bank",
    currency_symbol: "₦",
    amount: 35000,
    created_on: "2025-03-12T17:14:39.260Z",
    user: {
      first_name: "Daniel",
      last_name: "Agoziem",
    },
    id: "mkjifenqrtgk",
  },
  {
    type: "sent",
    service: "Bank",
    currency_symbol: "₦",
    amount: 40000,
    created_on: "2025-03-12T17:14:39.260Z",
    user: {
      username: "@chinonsogreat",
      first_name: "chinonso",
      last_name: "great",
    },
    id: "mkjqewreklmgk",
  },
  {
    type: "sent",
    service: "Bank",
    currency_symbol: "₦",
    amount: 8000,
    created_on: "2025-03-12T17:14:39.260Z",
    user: {
      first_name: "Oluwatobi",
      last_name: "Oseni",
    },
    id: "mkjqegk",
    imageUrl: require("@/assets/images/gt-bank.png"),
  },
  {
    type: "reversal",
    service: "Bank",
    currency_symbol: "₦",
    amount: 31950,
    created_on: "2025-03-12T17:14:39.260Z",
    user: {
      first_name: "Temidayo",
      last_name: "Anifowose",
    },
    id: "mklmgk",
  },
  {
    type: "top-up",
    service: "Bank",
    currency_symbol: "₵",
    amount: 8000,
    created_on: "2025-03-12T17:14:39.260Z",
    user: {
      first_name: "Oluwatobi",
      last_name: "Oseni",
    },
    id: "reklmgk",
    currency_name: "Ghanian Cedi",
  },

  {
    type: "received_individual",
    created_on: "2023-07-01T00:00:00.000Z",
    user: {
      first_name: "Didier",
      last_name: "Didier",
      username:"@moneymade$$",
    },
    currency_symbol: "₦",
    amount: 6900,
    id: "1232",
  },
  {
    type: "spent",
    service: "Netflix.com",
    created_on: "2023-07-01T00:00:00.000Z",
    currency_symbol: "$",
    amount: 50.09,
    id: "12",
  },
];
