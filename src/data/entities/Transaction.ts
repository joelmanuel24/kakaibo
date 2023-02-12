export type Transaction = {
  id?: number;
  // type: number | TranType;
  amount: number;
  tranDate: string;
  type: "expense" | "income";
};
