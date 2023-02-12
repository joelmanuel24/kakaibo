import { PaymentMethod } from "../../../data/entities/PaymentMethod";
import { TranType } from "../../../data/entities/TranType";
import { IPaymentMethodRepository } from "../../../data/repositories/IPaymentMethodRepository";

const paymentMethodRepository: IPaymentMethodRepository = {
  getAll: function (): Promise<PaymentMethod[]> {
    return Promise.resolve<PaymentMethod[]>([
      {
        id: 0,
        type: "cash",
        name: "Cash",
      },
      {
        id: 1,
        type: "e-wallet",
        name: "GCash",
      },
    ]);
  },
  create: function (obj: PaymentMethod): Promise<PaymentMethod> {
    throw new Error("Function not implemented.");
  },
};

export default paymentMethodRepository;
