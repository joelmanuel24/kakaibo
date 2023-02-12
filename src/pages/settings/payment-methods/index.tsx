import {
  BanknotesIcon,
  ChevronRightIcon,
  CreditCardIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";
import settingsRoute from "..";
import Page, { ModalPage } from "../../../components/page/page";
import useCreatePaymentMethod from "../../../hooks/payment-method/useCreatePaymentMethod";
import usePaymentMethods from "../../../hooks/payment-method/usePaymentMethods";

const paymentMethodsRoute = settingsRoute.createRoute({
  path: "paymentmethods",
  component: PaymentMethods,
});

function PaymentMethods() {
  const { data, isLoading, error } = usePaymentMethods();
  const { create } = useCreatePaymentMethod();
  return (
    <ModalPage title="Payment Methods">
      {isLoading ? (
        "Loading..."
      ) : error ? (
        error.message
      ) : (
        <ul className="mt-5">
          {data?.map((pm) => (
            <Link
              key={pm.id}
              className="flex items-center justify-between py-3 px-5"
            >
              <div className="flex items-center">
                {pm.type === "cash" ? (
                  <BanknotesIcon className="h-6 w-6 mr-3" />
                ) : pm.type === "e-wallet" ? (
                  <WalletIcon className="h-6 w-6 mr-3" />
                ) : (
                  <CreditCardIcon className="h-6 w-6 mr-3" />
                )}
                {pm.name}
              </div>
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          ))}
        </ul>
      )}
      <button onClick={() => create({ id: 0, name: "asd", type: "e-wallet" })}>
        asd
      </button>
    </ModalPage>
  );
}

export default paymentMethodsRoute;
