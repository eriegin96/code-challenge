import { swapFormSchema, TSwapForm } from "@/configs/swapForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CURRENCY_LIST } from "@/constants/currency";

export const useSwapForm = () => {
  const form = useForm<TSwapForm>({
    resolver: zodResolver(swapFormSchema),
    defaultValues: {
      fromCurrency: CURRENCY_LIST[0],
      fromAmount: 0,
      toCurrency: CURRENCY_LIST[1],
      toAmount: 0,
    },
  });

  const fromCurrency = form.watch("fromCurrency");
  const toCurrency = form.watch("toCurrency");
  // exchange rate

  const onSubmit = (values: TSwapForm) => {
    console.log(values);
  };

  return { form, fromCurrency, toCurrency, onSubmit };
};
