export type PaymentMethod = {
  id: number;
  type: "cash" | "creditcard" | "e-wallet";
  name: string;
};
