import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { TranType } from "../../data/entities/TranType";
import EmojiButton from "../emoji-button/emoji-button";

interface EmojiGridProps {
  items: Array<TranType>;
  onAdd?(): void;
}
function EmojiGrid({ items, onAdd }: EmojiGridProps) {
  return (
    <div
      className="grid justify-center p-5 gap-x-7 gap-y-10"
      style={{
        gridTemplateColumns: "repeat( auto-fit, minmax(3rem, 3rem) )",
      }}
    >
      {items.map((t) => (
        <EmojiButton key={t.id} emoji={t.emoji} color={t.color} text={t.name} />
      ))}
      {onAdd ? <AddButton /> : null}
    </div>
  );
}

interface ViewAllButtonProps {
  size?: "sm";
}
const ViewAllButton = ({ size }: ViewAllButtonProps) => {
  const textSpan = (
    <span className="absolute text-xs font-medium -bottom-5">View All</span>
  );
  const sizes = size === "sm" ? "w-10 h-10 text-xl" : "w-12 h-12 text-2xl";
  return (
    <button
      className={`relative flex items-center justify-center ${sizes} rounded-2xl shadow bg-slate-100 dark:bg-slate-800`}
    >
      <EllipsisHorizontalIcon className="h-8 w-8 text-gray-900 dark:text-slate-50" />
      {textSpan}
    </button>
  );
};

interface ViewAllButtonProps {
  size?: "sm";
}
const AddButton = ({ size }: ViewAllButtonProps) => {
  const textSpan = (
    <span className="absolute text-xs font-medium -bottom-6">Add</span>
  );
  const sizes = size === "sm" ? "w-10 h-10 text-xl" : "w-12 h-12 text-2xl";
  return (
    <button
      className={`relative flex items-center justify-center ${sizes} rounded-2xl border-spacing-1 border-slate-500 border-dotted border-2`}
    >
      <PlusCircleIcon className="h-8 w-8 text-slate-500" />
    </button>
  );
};

export default EmojiGrid;
