import { Link } from "@tanstack/react-router";
import TransactionList from "../components/transaction-list/transaction-list";
import WidgetPanel from "../components/widget-panel/widget-panel";

function RecentTransactions() {
  const seeAll = (
    <Link to={"/transactions"} className="text-green-600">
      See All
    </Link>
  );
  return (
    <WidgetPanel title="Recent Transactions" topRightElement={seeAll}>
      <TransactionList />
    </WidgetPanel>
  );
}

export default RecentTransactions;
