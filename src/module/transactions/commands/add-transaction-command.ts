import { z, ZodObject } from "zod";

export const AddTransactionCommandSchema = z.object({
  tranType: z.number(),
  amount: z.number(),
  remarks: z.string().optional(),
  tags: z.array(z.string()).optional(),
  sharedItems: z
    .array(
      z.object({
        personName: z.string(),
        items: z.array(
          z.object({
            name: z.string(),
            amount: z.number(),
          })
        ),
      })
    )
    .optional(),
  payment: z.number(),
});

export type AddTransactionCommandType = z.infer<
  typeof AddTransactionCommandSchema
>;

const AddTransactionHandler = (command: AddTransactionCommandType) => {
  console.log("test from handler");
  return command;
};

export default AddTransactionHandler;
