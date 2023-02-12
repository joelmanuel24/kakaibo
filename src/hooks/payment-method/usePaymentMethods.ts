import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { PaymentMethod } from "../../data/entities/PaymentMethod";
import { KakeiboContext } from "../../kakeibo";

export default function usePaymentMethods() {
  const { paymentMethods } = useContext(KakeiboContext);

  const { data, isLoading, error } = useQuery<
    PaymentMethod[],
    { message: string }
  >(["payment-methods"], paymentMethods.getAll);

  return {
    isLoading,
    data,
    error,
  };
}
