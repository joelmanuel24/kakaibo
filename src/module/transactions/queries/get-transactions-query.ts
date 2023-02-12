import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { z } from "zod";
import { ITransactionRepository } from "../../../data/repositories/ITransactionRepository";
import { KakeiboContext } from "../../../kakeibo";

export const GetTransactionQuerySchema = z.object({});

export type GetTransactionsQuery = z.infer<typeof GetTransactionQuerySchema>;

export async function GetTransactionsQueryHandler(
  tranRepo: ITransactionRepository,
  command: GetTransactionsQuery
) {
  // const { transactions } = useContext(KakeiboContext);
  // const { data, isLoading } = useQuery(["transactions"], transactions.getAll);

  var transactions = await tranRepo.getAll();

  return transactions.map((tran) => {
    if (tran.type === "expense") {
    } else if (tran.type === "income") {
    } else {
      return null;
    }
  });
}
// const GetTransactionsQueryHandler = (command: GetTransactionsQuery) => {
//   console.log("test from handler");
//   return command;
// };
