import EmojiGrid from "../components/emoji-grid/emoji-grid";
import WidgetPanel from "../components/widget-panel/widget-panel";
import useTranTypes from "../hooks/useTranTypes";

function ShortcutsWidget() {
  const { isLoading, data } = useTranTypes();
  return (
    <WidgetPanel title={""} hideTitle>
      <EmojiGrid items={data ?? []} />
    </WidgetPanel>
  );
}

export default ShortcutsWidget;
