import MoneyHeader from "../components/money-header/money-header";
import WidgetPanel from "../components/widget-panel/widget-panel";

function TotalSavings() {
  return (
    <WidgetPanel title="Total Savings">
      <MoneyHeader value={123} />
    </WidgetPanel>
  );
}

export default TotalSavings;
