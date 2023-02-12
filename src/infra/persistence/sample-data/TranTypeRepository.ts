import { TranType } from "../../../data/entities/TranType";
import { ITranTypeRepository } from "../../../data/repositories/ITranTypeRepository";

const tranTypeRepository: ITranTypeRepository = {
  getAll: function (): Promise<TranType[]> {
    return Promise.resolve<TranType[]>([
      {
        id: 1,
        name: "Transpo",
        color: "#73a3a1",
        emoji: "🚌",
      },
      {
        id: 2,
        name: "Food",
        color: "#969661",
        emoji: "🍟",
      },
      {
        id: 3,
        name: "MFunds",
        color: "#faabab",
        emoji: "💓",
      },
      {
        id: 4,
        name: "Car",
        color: "#83bafa",
        emoji: "🚙",
      },
      {
        id: 5,
        name: "Electricity",
        color: "#f7e3c7",
        emoji: "⚡",
      },
      {
        id: 6,
        name: "Insurance",
        color: "#e4e6a6",
        emoji: "🌞",
      },
      {
        id: 7,
        name: "Condo",
        color: "#f1e4e4",
        emoji: "🏠",
      },
      {
        id: 8,
        name: "Games",
        color: "#9E79B9",
        emoji: "🎮",
      },
      {
        id: 9,
        name: "Gifts",
        color: "#FEEBD8",
        emoji: "🎁",
      },
    ]);
  },
  create: function (obj: TranType): Promise<TranType> {
    throw new Error("Function not implemented.");
  },
};

export default tranTypeRepository;
