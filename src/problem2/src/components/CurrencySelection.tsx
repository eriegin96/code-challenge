import { CURRENCY_ICON, CURRENCY_LIST } from "@/constants/currency";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TCurrencySelectionProps = {
  willPay?: boolean;
  balance: number;
  currency: string;
};

export function CurrencySelection({
  willPay,
  currency,
  balance = 0,
}: TCurrencySelectionProps) {
  return (
    <div className="w-full bg-dark2 rounded-2xl p-4">
      <div className="flex justify-between items-center">
        <span>You {willPay ? "pay" : "receive"}</span>
        <span>Balance: {balance}</span>
      </div>
      <div className="my-3 flex justify-between items-center">
        <span className="text-4xl font-semibold">{balance}</span>
        <Select value={currency}>
          <SelectTrigger className="w-4xl bg-dark2">
            <SelectValue placeholder="Currency" />
          </SelectTrigger>
          <SelectContent className="bg-dark2 text-white">
            {CURRENCY_LIST.map((currency) => (
              <SelectItem key={currency} value={currency} className="flex">
                <div className="flex items-center gap-2">
                  <img src={CURRENCY_ICON[currency]}></img> {currency}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-end">
        <Button size="sm">Max</Button>
      </div>
    </div>
  );
}
