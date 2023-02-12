import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { KakeiboContext } from "../kakeibo";

export default function useTransactions() {
  const { transactions } = useContext(KakeiboContext);
  const { data, isLoading } = useQuery(["transactions"], transactions.getAll);

  return {
    isLoading,
    data,
  };
}
