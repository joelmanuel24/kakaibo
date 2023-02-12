import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";
import { EmojiIcon } from "../../components/emoji-button/emoji-button";
import Page from "../../components/page/page";
import { RouteIdKeys } from "../../router";
import { hexToRGB, money } from "../../utils";
import { rootRoute } from "../__root";

const goalsRoute = rootRoute.createRoute({
  path: "goals",
  component: Goals,
});

function Goals() {
  return (
    <Page title="Goals">
      <div>
        <button className="px-4 py-2">
          <PlusCircleIcon className="w-6 h-6 ml-1 text-inherit" />
        </button>
      </div>
      <div>
        <ul>
          <GoalItem
            name="PS5"
            emoji="🕹️"
            color="#9E79B9"
            currentVal={5000}
            targetVal={25000}
          />
          <GoalItem
            name="Condo"
            emoji="🏠"
            color="#f7c7c7"
            currentVal={1000000}
            targetVal={2500000}
          />
        </ul>
      </div>
    </Page>
  );
}

type GoalItemProps = {
  name: string;
  emoji: string;
  color: string;
  currentVal: number;
  targetVal: number;
};
function GoalItem(props: GoalItemProps) {
  const percent = (props.currentVal / props.targetVal) * 100;
  return (
    <li>
      <Link to="/goals/view" className="flex items-center py-2 px-5">
        <EmojiIcon as="div" emoji={props.emoji} color={props.color} />
        <div className="flex-1 px-3">
          <div className="flex items-center justify-between text-xs">
            <div>{props.name}</div>
            <div>
              PHP {money(props.currentVal, "")} / {money(props.targetVal, "")}
            </div>
          </div>
          <div
            className={`h-2 mt-1 rounded-md shadow-inner`}
            style={{ backgroundColor: hexToRGB(props.color, 0.6) }}
          >
            <div
              className={`h-full rounded-md`}
              style={{
                backgroundColor: hexToRGB(props.color, 1),
                width: `${percent}%`,
              }}
            ></div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default goalsRoute;
