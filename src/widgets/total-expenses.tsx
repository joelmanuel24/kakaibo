import { ChevronDownIcon } from "@heroicons/react/24/outline";
import MoneyHeader from "../components/money-header/money-header";
import WidgetPanel from "../components/widget-panel/widget-panel";

function TotalExpenses() {
  const filters = (
    <div className="flex">
      <button className="flex">
        TODAY <ChevronDownIcon className="w-4 h-4 ml-1 text-inherit" />
      </button>
    </div>
  );
  return (
    <WidgetPanel title="Total Expenses" topRightElement={filters}>
      <MoneyHeader value={299.99} />
    </WidgetPanel>
  );
}

export default TotalExpenses;
