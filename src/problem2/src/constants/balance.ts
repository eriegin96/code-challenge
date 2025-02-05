import { CURRENCY_LIST } from "./currency";

export const DEFAULT_BALANCE = CURRENCY_LIST.reduce((balance, currentValue) => {
  balance[currentValue] = 0;
  return balance;
}, {} as Record<string, number>);

export const RANDOM_BALANCE = CURRENCY_LIST.reduce((balance, currentValue) => {
  // create random balance for each currency
  balance[currentValue] = Math.random() * 100;
  return balance;
}, {} as Record<string, number>);

export const MIN_INPUT = 0.000001;
export const MAX_INPUT = 1000;
