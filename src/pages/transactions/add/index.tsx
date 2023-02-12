import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { useMatch } from "@tanstack/react-router";
import transactionsRoute from "..";
import Navbar from "../../../components/navbar/navbar";
import TransactionForm from "../../../components/transaction-form/transaction-form";
import usePaymentMethods from "../../../hooks/payment-method/usePaymentMethods";
import AddTransactionHandler from "../../../module/transactions/commands/add-transaction-command";

const addTransactionRoute = transactionsRoute.createRoute({
  path: "add",
  component: AddTransaction,
  action: AddTransactionHandler,
});

function AddTransaction() {
  const { navigate, action } = useMatch(addTransactionRoute.id);
  const { data: paymentMethods, isLoading } = usePaymentMethods();

  if (isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-10 bg-[#f3f4f6] dark:bg-[#242424] py-16 overflow-y-auto">
      <Navbar
        leftButton={{
          type: "button",
          icon: ArrowLeftIcon,
          onClick: () =>
            navigate({
              to: "../",
              search: {},
              params: {},
            }),
        }}
        title="Add Transaction"
      ></Navbar>
      <TransactionForm
        paymentMethods={paymentMethods ?? []}
        onSubmit={(data) => action?.submit(data, { multi: true })}
        defaultValue={{
          amount: 523.0,
          remarks: "Mcdo",
          share: [
            {
              personName: "Nohj",
              items: [
                { name: "Italian BMT", amount: 185 },
                { name: "Large Coke", amount: 65 },
              ],
            },
            {
              personName: "Jerald",
              items: [
                { name: "Chicken Teriyaki", amount: 145 },
                { name: "Brewed Coffee", amount: 95 },
              ],
            },
          ],
          payment: 1,
        }}
      />
    </div>
  );
}

export default addTransactionRoute;
