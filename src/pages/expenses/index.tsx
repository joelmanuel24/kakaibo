import { ChevronUpDownIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import EmojiGrid from "../../components/emoji-grid/emoji-grid";
import FullPageModal from "../../components/modal/full-page-modal";
import MoneyHeader from "../../components/money-header/money-header";
import Page from "../../components/page/page";
import TransactionList from "../../components/transaction-list/transaction-list";
import useTranTypes from "../../hooks/useTranTypes";
import { rootRoute } from "../__root";

export const expensesRoute = rootRoute.createRoute({
  path: "expenses",
  component: Expenses,
});

function Expenses() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, data } = useTranTypes();

  const totalExpenses = (
    <div className="px-3 py-6">
      <MoneyHeader value={13751.12} />
    </div>
  );

  const icons = <EmojiGrid items={data ?? []} />;

  const transactions = (
    <div className="mt-9">
      <TransactionList showHeaders />
    </div>
  );

  const addButton = (
    <button className="flex items-center px-4 py-3 bg-cyan-900 text-cyan-50 rounded-xl">
      <PlusIcon className="w-6 h-6 mr-2" />
      <div className="text-sm font-medium">Add Transaction</div>
    </button>
  );

  const headerChildren = (
    <button className="flex items-center p-1">
      <div className="font-medium">
        <div className="text-right">Today</div>
        <div className="text-xs leading-3 text-right text-gray-500">
          December 15, 2022
        </div>
      </div>
      <ChevronUpDownIcon className="w-6 h-6 ml-1 text-gray-700" />
    </button>
  );

  const pageBody = (
    <div>
      {totalExpenses}
      {icons}

      {transactions}

      <div
        className="fixed shadow-md bottom-8 right-4"
        onClick={() => setIsOpen(true)}
      >
        {addButton}
      </div>

      <FullPageModal
        title="Select Transaction Type"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <EmojiGrid items={data ?? []} />
      </FullPageModal>
    </div>
  );

  return (
    <Page title="Expenses">
      {headerChildren}
      {pageBody}
    </Page>
  );
}

export default expensesRoute;
