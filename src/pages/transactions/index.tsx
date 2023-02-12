import { PlusIcon } from "@heroicons/react/24/outline";
import { Link, Outlet, useMatch } from "@tanstack/react-router";
import Page from "../../components/page/page";
import TransactionList from "../../components/transaction-list/transaction-list";
import useTransactions from "../../hooks/useTransactions";
import { rootRoute } from "../__root";

const transactionsRoute = rootRoute.createRoute({
  path: "transactions",
  component: Transactions,
});

function Transactions() {
  const { data, isLoading } = useTransactions();

  if (isLoading) {
    return null;
  }

  console.log(data);

  return (
    <Page title="Transactions">
      <></>
      <>
        <TransactionList />
        <Link
          to="/transactions/add"
          className="p-3 bg-cyan-900 rounded-xl fixed bottom-8 right-4"
        >
          <PlusIcon className="h-6 w-6" />
        </Link>
        <Outlet />
      </>
    </Page>
  );
}

export default transactionsRoute;
