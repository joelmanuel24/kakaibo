import Dexie, { Table } from "dexie";
import { TranType } from "../../../data/entities/TranType";

export class KakeiboDb extends Dexie {
  tranTypes!: Table<TranType>;

  constructor() {
    super("kakeiboDb");
    this.version(1).stores({
      friends: "++id, name", // Primary key and indexed props
    });
  }
}

export const db = new KakeiboDb();
