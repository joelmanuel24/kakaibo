import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { PaymentMethod } from "../../data/entities/PaymentMethod";
import { KakeiboContext } from "../../kakeibo";

export default function useCreatePaymentMethod() {
  const queryClient = useQueryClient();
  const { paymentMethods } = useContext(KakeiboContext);

  const mutation = useMutation(["payment-methods"], {
    mutationFn: (obj: PaymentMethod) => {
      return paymentMethods.create(obj);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["payment-methods"] });
    },
  });

  const create = (obj: PaymentMethod) => {
    mutation.mutate(obj);
  };

  return {
    create,
  };
}
