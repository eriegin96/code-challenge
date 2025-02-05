import { useWalletContext } from "@/providers/WalletProvider";
import { CurrencySelection } from "./CurrencySelection";
import { Button } from "./ui/button";
import { ArrowUpDown } from "lucide-react";

export function SwapForm() {
  const { balance } = useWalletContext();
  console.log(balance);

  return (
    <div className="w-96 border border-gray-400 p-6 rounded-2xl bg-dark1 text-gray-200 shadow-xl shadow-gray-900 flex flex-col gap-5">
      <div className="relative flex flex-col gap-5">
        <CurrencySelection willPay balance={0} currency="ETH" />
        <Button
          variant="outline"
          className="absolute rounded-full text-violet-600 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          size="icon"
        >
          <ArrowUpDown />
        </Button>
        <CurrencySelection balance={0} currency="USD" />
      </div>

      <div className="my-1 self-center text-sm">1 ETH = 2674.24314 USD</div>
      <Button className="uppercase">Swap</Button>
    </div>
  );
}
