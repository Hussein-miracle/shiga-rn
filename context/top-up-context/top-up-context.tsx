import {
  DEFAULT_VIRTUAL_CARD_BALANCE,
  DEFAULT_WALLET_BALANCE,
} from "@/constants";
import * as SecureStore from "expo-secure-store";
import { createContext, ReactNode, useContext, useState } from "react";

type TopUpContextType = {
  walletBalance: number;
  virtualCardBalance: number;
  amountToDeduct: number;
  handleAddFromWalletToCard: (amount: number) => void;
  handleSaveDeductionAmount: (amount: number) => void;
  handleReset: () => void;
};

const TopUpContext = createContext<TopUpContextType>({
  walletBalance: DEFAULT_WALLET_BALANCE,
  virtualCardBalance: DEFAULT_VIRTUAL_CARD_BALANCE,
  handleAddFromWalletToCard: function (amount: number): void {},
  handleSaveDeductionAmount: function (amount: number): void {},
  amountToDeduct: 0,
  handleReset: function (): void {},
});

const TopUpContextProvider = ({ children }: { children: ReactNode }) => {
  const savedAmountToDeduct = !!SecureStore.getItem("savedAmountToDeduct")
    ? JSON.parse(SecureStore.getItem("savedAmountToDeduct") as string)
    : null;
  const savedWalletBalance = !!SecureStore.getItem("savedWalletBalance")
    ? JSON.parse(SecureStore.getItem("savedWalletBalance") as string)
    : null;
  const savedVirtualCardBalance = !!SecureStore.getItem(
    "savedVirtualCardBalance"
  )
    ? JSON.parse(SecureStore.getItem("savedVirtualCardBalance") as string)
    : null;

  const [amountToDeduct, setAmountToDeduct] = useState<number>(
    savedAmountToDeduct ?? 0
  );
  const [walletBalance, setWalletBalance] = useState<number>(
    savedWalletBalance ?? DEFAULT_WALLET_BALANCE
  );
  const [virtualCardBalance, setVirtualCardBalance] = useState<number>(
    savedVirtualCardBalance ?? DEFAULT_VIRTUAL_CARD_BALANCE
  );

  const handleReset = () => {
    SecureStore.deleteItemAsync("savedVirtualCardBalance");
    SecureStore.deleteItemAsync("savedWalletBalance");
    SecureStore.deleteItemAsync("savedAmountToDeduct");
  };

  const handleAddFromWalletToCard = async (amount: number) => {
    if (walletBalance >= amount && walletBalance > 0) {
      const balance_after_deduction = walletBalance - amount;
      const virtual_card_balance = amount + virtualCardBalance;

      SecureStore.setItem(
        "savedWalletBalance",
        balance_after_deduction.toString()
      );
      SecureStore.setItem(
        "savedVirtualCardBalance",
        virtual_card_balance.toString()
      );
      setVirtualCardBalance(virtual_card_balance);
      setWalletBalance(balance_after_deduction);
    }
  };

  const handleSaveDeductionAmount = (value: number) => {
    SecureStore.setItem("savedAmountToDeduct", value.toString());
    setAmountToDeduct(value);
  };

  const value = {
    walletBalance,
    virtualCardBalance,
    handleAddFromWalletToCard,
    amountToDeduct,
    handleSaveDeductionAmount,
    handleReset
  };
  return (
    <TopUpContext.Provider value={value}>{children}</TopUpContext.Provider>
  );
};

export default TopUpContextProvider;

export const useTopUpContext = () => {
  const context = useContext(TopUpContext);

  if (!context) {
    throw new Error("useTopUpContext must be called in a TopUpContextProvider");
  }

  return context;
};
