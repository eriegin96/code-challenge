import { CURRENCY_ICON, CURRENCY_LIST } from "@/constants/currency";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";
import { TSwapForm } from "@/configs/swapForm";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { MAX_INPUT, MIN_INPUT } from "@/constants/balance";

type TCurrencySelectionProps = {
  inputName: keyof TSwapForm;
  selectName: keyof TSwapForm;
  willPay?: boolean;
  balance: number;
};

export function CurrencySelection({
  inputName,
  selectName,
  willPay,
  balance = 0,
}: TCurrencySelectionProps) {
  const { control } = useFormContext<TSwapForm>();

  return (
    <div className="w-full bg-dark2 rounded-2xl p-4">
      <div className="flex justify-between items-center">
        <span>You {willPay ? "pay" : "receive"}</span>
        <span>Balance: {balance}</span>
      </div>
      <div className="my-3 flex justify-between items-center gap-10">
        <FormField
          control={control}
          name={inputName}
          render={({ field }) => (
            <FormItem>
              <FormDescription>
                {MIN_INPUT} - {MAX_INPUT}
              </FormDescription>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  className="!text-4xl font-semibold border-0 p-0"
                  placeholder=""
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={selectName}
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value as string}
              >
                <SelectTrigger className="w-28 bg-dark2">
                  <SelectValue placeholder="Currency" />
                </SelectTrigger>
                <SelectContent className="bg-dark2 text-white">
                  {CURRENCY_LIST.map((currency) => (
                    <SelectItem
                      key={currency}
                      value={currency}
                      className="flex"
                    >
                      <div className="flex items-center gap-2">
                        <img src={CURRENCY_ICON[currency]} /> {currency}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex justify-end">
        <Button size="sm" type="button">
          Max
        </Button>
      </div>
    </div>
  );
}
