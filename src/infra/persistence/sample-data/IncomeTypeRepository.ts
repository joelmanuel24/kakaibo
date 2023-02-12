import { IncomeType } from "../../../data/entities/IncomeType";
import { PaymentMethod } from "../../../data/entities/PaymentMethod";
import { IIncomeTypeRepository } from "../../../data/repositories/IIncomeType";

const incomeTypeRepository: IIncomeTypeRepository = {
  getAll: function (): Promise<IncomeType[]> {
    return Promise.resolve<IncomeType[]>([
      {
        id: 1,
        name: "Salary",
      },
      {
        id: 2,
        name: "Bonus",
      },
    ]);
  },
  create: function (obj: PaymentMethod): Promise<PaymentMethod> {
    throw new Error("Function not implemented.");
  },
};

export default incomeTypeRepository;
