import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import { IPaymentMethodRepository } from "./data/repositories/IPaymentMethodRepository";
import { ITransactionRepository } from "./data/repositories/ITransactionRepository";
import { ITranTypeRepository } from "./data/repositories/ITranTypeRepository";
import { default as tranTypeRepositoryDexie } from "./infra/persistence/indexed-db/repos/TranTypeRepository";
import paymentMethodRepository from "./infra/persistence/sample-data/PaymentMethodRepository";
import paymentMethodRepositorySupa from "./infra/persistence/supabase/PaymentMethodRepository";
import transactionRepository from "./infra/persistence/sample-data/TransactionRepository";
import tranTypeRepository from "./infra/persistence/sample-data/TranTypeRepository";

type Kakeibo = {
  tranTypes: ITranTypeRepository;
  paymentMethods: IPaymentMethodRepository;
  transactions: ITransactionRepository;
};

// modify this to inject your own implementation
const sampleKakeibo: Kakeibo = {
  tranTypes: tranTypeRepository,
  paymentMethods: paymentMethodRepository,
  transactions: transactionRepository,
};

const supabaseProvider: Kakeibo = {
  tranTypes: tranTypeRepository,
  paymentMethods: paymentMethodRepositorySupa,
  transactions: transactionRepository,
};

export const KakeiboContext = React.createContext<Kakeibo>({} as Kakeibo);

const queryClient = new QueryClient();

function KakeiboProvider({ children }: PropsWithChildren) {
  return (
    <KakeiboContext.Provider value={supabaseProvider}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </KakeiboContext.Provider>
  );
}

export default KakeiboProvider;
