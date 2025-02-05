import { useWalletContext } from "@/providers/WalletProvider";
import { CurrencySelection } from "./CurrencySelection";
import { Button } from "./ui/button";
import { ArrowUpDown } from "lucide-react";
import { useSwapForm } from "@/hooks";
import { Form } from "./ui/form";

export function SwapForm() {
  const { balance } = useWalletContext();
  const { form, fromCurrency, toCurrency, onSubmit } = useSwapForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-[500px] border border-gray-400 p-6 rounded-2xl bg-dark1 text-gray-200 shadow-xl shadow-gray-900 flex flex-col gap-5">
          <div className="relative flex flex-col gap-5">
            <CurrencySelection
              inputName="fromAmount"
              selectName="fromCurrency"
              willPay
              balance={balance[fromCurrency]}
            />
            <Button
              variant="outline"
              className="absolute rounded-full text-violet-600 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              size="icon"
            >
              <ArrowUpDown />
            </Button>
            <CurrencySelection
              inputName="toAmount"
              selectName="toCurrency"
              balance={balance[toCurrency]}
            />
          </div>

          <div className="my-1 self-center text-sm">
            1 {fromCurrency} = 2674.24314 {toCurrency}
          </div>
          <Button
            className="uppercase"
            type="submit"
            disabled={!form.formState.isDirty}
          >
            Swap
          </Button>
        </div>
      </form>
    </Form>
  );
}
