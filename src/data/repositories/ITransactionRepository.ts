import { Transaction } from "../entities/Transaction";
import { IRepository } from "./IRepository";

export interface ITransactionRepository extends IRepository<Transaction> {}
