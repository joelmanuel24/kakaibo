import { PaymentMethod } from "../../../data/entities/PaymentMethod";
import { IPaymentMethodRepository } from "../../../data/repositories/IPaymentMethodRepository";
import supabase from "./supadb";

const paymentMethodRepository: IPaymentMethodRepository = {
  getAll: async function (): Promise<PaymentMethod[]> {
    const { data, error } = await supabase.from("payment_method").select("*");
    if (error) {
      return Promise.reject({
        message: error.message,
      });
    }
    if (data) {
      return data as PaymentMethod[];
    }
    return [];
  },
  create: async function (obj: PaymentMethod): Promise<PaymentMethod> {
    console.log(obj);
    // const { data: existingData, error } = await supabase
    //   .from("payment_method")
    //   .select("*")
    //   .eq("name", obj.name)
    //   .single();

    // if (error) {
    //   return Promise.reject({
    //     message: error.message,
    //   });
    // }

    // if (existingData) {
    //   return Promise.reject({
    //     message: "Payment method already exists",
    //   });
    // }

    const { data, error } = await supabase
      .from("payment_method")
      .insert({
        created_at: new Date().toISOString(),
        name: obj.name,
        type: obj.type,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }
    if (!data) {
      return Promise.reject({
        message: "Unable to create payment method",
      });
    }

    return {
      ...obj,
      id: data?.id,
    };
  },
};

export default paymentMethodRepository;
