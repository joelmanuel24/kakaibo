import {
  ArrowDownIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  CogIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { PropsWithChildren, ReactNode, useState } from "react";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";

interface WidgetPanelProps extends PropsWithChildren {
  title: string;
  hideTitle?: boolean;
  topRightElement?: ReactNode;
}
function DraggableWidgetPanel({ title, children }: WidgetPanelProps) {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
  const [direction, setDirection] = useState(0);

  const bind = useDrag(
    ({ down, movement: [mx, my] }) => {
      if (down && direction === 0) {
        if (mx === -1 || mx === 1) setDirection(mx);
      }
      if (!down) {
        setDirection(0);
      }
      api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
    },
    { axis: "x", eventOptions: { capture: true } }
  );

  return (
    <div
      className={`overflow-hidden relative z-0 ${
        direction === 1 ? "bg-blue-500" : "bg-gray-500"
      }`}
    >
      <div className="bg-blue-500 absolute w-16 inset-y-0 text-black z-[-1]">
        A
      </div>
      <div className="bg-gray-500 absolute w-16 inset-y-0 right-0 text-black z-[-1] flex items-center justify-center">
        <Cog6ToothIcon className="w-8 h-8 text-white " />
      </div>
      <animated.div
        {...bind()}
        className="px-3 py-3 bg-gray-100 dark:bg-[#242424] touch-none"
        style={{ x, y }}
      >
        {children}
      </animated.div>
    </div>
  );
}

function WidgetPanel({
  title,
  hideTitle,
  topRightElement,
  children,
}: WidgetPanelProps) {
  return (
    <div className="p-3">
      {!hideTitle ? (
        <div className="flex justify-between px-2 py-2 text-xs font-medium text-gray-500 uppercase">
          <span>{title}</span>
          {topRightElement ? topRightElement : null}
        </div>
      ) : null}
      <div className="">{children}</div>
    </div>
  );
}

function Card({ children }: PropsWithChildren) {
  return (
    <div className="px-2 py-4 mx-4 my-2 bg-white rounded-md shadow">
      {children}
    </div>
  );
}

export default WidgetPanel;
