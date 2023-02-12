import { Transaction } from "../../../data/entities/Transaction";
import { ITransactionRepository } from "../../../data/repositories/ITransactionRepository";

const transactionRepository: ITransactionRepository = {
  getAll: function (): Promise<Transaction[]> {
    return Promise.resolve<Transaction[]>([
      {
        id: 1,
        type: "income",
        amount: 14000,
        tranDate: "2023-01-01T14:10:13.853Z",
      },
      {
        id: 2,
        type: "expense",
        amount: 300,
        tranDate: "2023-01-02T14:10:13.853Z",
      },
    ]);
  },
  create: function (obj: Transaction): Promise<Transaction> {
    throw new Error("Function not implemented.");
  },
};

export default transactionRepository;
