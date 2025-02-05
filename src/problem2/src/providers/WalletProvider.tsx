import { DEFAULT_BALANCE, RANDOM_BALANCE } from "@/constants/balance";
import { createContext, ReactNode, useContext, useState } from "react";

type TWalletContext = {
  balance: Record<string, number>;
  swapBalance: (
    fromCurrency: string,
    fromAmount: number,
    toCurrency: string
  ) => void;
};

type TWalletProviderProps = {
  children: ReactNode;
};

const WalletContext = createContext<TWalletContext>({
  balance: DEFAULT_BALANCE,
  swapBalance: () => {},
});

export function WalletProvider({ children }: TWalletProviderProps) {
  const [balance, setBalance] =
    useState<Record<string, number>>(RANDOM_BALANCE);

  const swapBalance = (
    fromCurrency: string,
    fromAmount: number,
    toCurrency: string
  ) => {
    setBalance((prev) => {
      prev[fromCurrency] = 0;
      return prev;
    });
    setBalance((prev) => {
      prev[toCurrency] = fromAmount;
      return prev;
    });
  };

  const value = { balance, swapBalance };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
}

export const useWalletContext = () => useContext(WalletContext);
