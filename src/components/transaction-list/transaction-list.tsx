import {
  ArrowDownLeftIcon,
  ArrowDownTrayIcon,
  ArrowSmallRightIcon,
  ArrowsRightLeftIcon,
  ArrowUpRightIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/solid";
import React, { PropsWithChildren, ReactNode } from "react";
import { money } from "../../utils";
import EmojiButton from "../emoji-button/emoji-button";
import IconButton, { HeroIconType } from "../icon-button/icon-button";
import Tag from "../tag/tag";

interface TransactionListProps {
  showHeaders?: boolean;
}
function TransactionList({ showHeaders }: TransactionListProps) {
  const headers = showHeaders ? (
    <>
      <div className="flex justify-between">
        <div className="text-lg font-medium">Transactions</div>
        <button className="text-sm font-medium text-green-700">See All</button>
      </div>
      <div className="mt-3 text-sm font-medium text-gray-400">
        December 15, 2022
      </div>
    </>
  ) : null;

  const nodeItems = (
    <>
      <TransactionListItem
        type="icon"
        name="Loan"
        icon={ArrowDownLeftIcon}
        amount={300}
        description={
          <div className="flex items-center">
            <span>Kuya Errol</span>
            <ArrowSmallRightIcon className="w-4 h-4 text-slate-500" />
            <span>Cash</span>
          </div>
        }
      />
      <TransactionListItem
        type="emoji"
        name="Games"
        emoji="🎮"
        color="#9E79B9"
        amount={-119}
        description="Game Pass Subscription"
        paymentMethod={<Tag as="span" icon={CreditCardIcon} text="*3905" />}
      />
      <TransactionListItem
        type="emoji"
        name="Food"
        emoji="🍟"
        color="#969661"
        amount={-185}
        description="Subway"
        paymentMethod={<Tag as="span" icon={ShareIcon} minimal />}
      />
      <TransactionListItem
        type="emoji"
        name="Transpo"
        emoji="🚌"
        color="#73a3a1"
        amount={-628}
        description="Grab"
        paymentMethod={<Tag as="span" icon={CreditCardIcon} text="*3905" />}
      />
      <TransactionListItem
        type="icon"
        name="Transfer"
        icon={ArrowsRightLeftIcon}
        amount={6650}
        description={
          <div className="flex items-center">
            <span>Salary</span>
            <ArrowSmallRightIcon className="w-4 h-4 text-slate-500" />
            <span>PS5 (GSave)</span>
          </div>
        }
      />
      <TransactionListItem
        type="icon"
        name="Loan"
        icon={ArrowUpRightIcon}
        amount={-300}
        description={
          <div className="flex items-center">
            <span>Salary</span>
            <ArrowSmallRightIcon className="w-4 h-4 text-slate-500" />
            <span>Kuya Errol</span>
          </div>
        }
      />
      <TransactionListItem
        type="icon"
        name="Income"
        icon={ArrowDownTrayIcon}
        amount={14000}
        description="Salary"
      />
    </>
  );
  return (
    <div className="px-6">
      {headers}
      <ul>{nodeItems}</ul>
    </div>
  );
}

interface ITranListItem {
  name: string;
  amount: number;
  paymentMethod?: ReactNode;
  description: ReactNode;
}

interface EmojiTranItem extends ITranListItem {
  type: "emoji";
  emoji: string;
  color: string;
}
interface IconTranItem extends ITranListItem {
  type: "icon";
  icon: HeroIconType;
}

function TransactionListItem(props: EmojiTranItem | IconTranItem) {
  const icon =
    props.type === "emoji" ? (
      <EmojiButton emoji={props.emoji} color={props.color} size="sm" />
    ) : (
      <IconButton size="sm" icon={props.icon} />
    );
  return (
    <li className="flex items-center my-3 text-sm">
      {icon}
      <div className="flex-1 mx-2 font-medium">
        <div>{props.name}</div>
        <div className="text-xs font-medium leading-3 text-gray-500">
          {props.description}
        </div>
      </div>
      <div className="text-right">
        <div className="font-medium">{money(props.amount)}</div>
        <div className="space-x-1 leading-3">{props.paymentMethod}</div>
      </div>
    </li>
  );
}

export default TransactionList;
