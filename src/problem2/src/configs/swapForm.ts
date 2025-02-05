import { CURRENCY_LIST } from "@/constants/currency";
import { z } from "zod";

export const swapFormSchema = z.object({
  fromCurrency: z.enum(CURRENCY_LIST as [string, ...string[]]),
  fromAmount: z.coerce.number().positive().lte(1),
  toCurrency: z.enum(CURRENCY_LIST as [string, ...string[]]),
  toAmount: z.coerce.number().positive().lte(1),
});

export type TSwapForm = z.infer<typeof swapFormSchema>;
