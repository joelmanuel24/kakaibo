import { TranType } from "../../../../data/entities/TranType";
import { ITranTypeRepository } from "../../../../data/repositories/ITranTypeRepository";
import { db } from "../db";

const tranTypeRepository: ITranTypeRepository = {
  getAll: async function (): Promise<TranType[]> {
    return await db.tranTypes.toArray();
  },
  create: async function (obj: TranType): Promise<TranType> {
    try {
      const id = await db.tranTypes.add({
        name: obj.name,
        emoji: obj.emoji,
        color: obj.color,
      });

      return {
        ...obj,
      };
    } catch (ex) {
      throw ex;
    }
  },
};

export default tranTypeRepository;
