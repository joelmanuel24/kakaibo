import { PaymentMethod } from "../entities/PaymentMethod";
import { IRepository } from "./IRepository";

export interface IPaymentMethodRepository extends IRepository<PaymentMethod> {}
