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
    <div className="w-full bg-indigo-950 rounded-2xl p-4">
      <div className="flex justify-between items-center">
        <span>You {willPay ? "pay" : "receive"}</span>
        <span>Balance: {balance}</span>
      </div>
      <div className="my-3 flex justify-between items-center">
        <span className="text-3xl font-semibold">{balance}</span>
        <Select value={currency}>
          <SelectTrigger className="w-4xl bg-indigo-900">
            <SelectValue placeholder="Currency" />
          </SelectTrigger>
          <SelectContent className="bg-indigo-900 text-white">
            <SelectItem value="ETH">ETH</SelectItem>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="ATOM">ATOM</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-end">
        <Button size="sm">Max</Button>
      </div>
    </div>
  );
}
