import { CURRENCY_LIST } from "@/constants/currency";
import { z } from "zod";

export const swapFormSchema = z
  .object({
    fromCurrency: z.enum(CURRENCY_LIST as [string, ...string[]]),
    fromAmount: z.coerce.number().positive(),
    toCurrency: z.enum(CURRENCY_LIST as [string, ...string[]]),
    toAmount: z.coerce.number().positive(),
  })
  .refine((data) => data.fromCurrency !== data.toCurrency, {
    message: "The currencies must be distinguished",
    path: ["fromCurrency"],
  });

export type TSwapForm = z.infer<typeof swapFormSchema>;

export const defaultSwapFormValue = {
  fromCurrency: CURRENCY_LIST[0],
  fromAmount: 0,
  toCurrency: CURRENCY_LIST[1],
  toAmount: 0,
};

export const percentageAmount = [
  { value: 10, content: "10%" },
  { value: 25, content: "25%" },
  { value: 50, content: "50%" },
  { value: 75, content: "75%" },
  { value: 100, content: "Max" },
];
