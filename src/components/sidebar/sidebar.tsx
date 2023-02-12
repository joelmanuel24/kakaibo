import {
  ChartPieIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  InformationCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";
import React from "react";

type SidebarProps = {
  onClickMenu?(): void;
};
function Sidebar({ onClickMenu }: SidebarProps) {
  return (
    <nav className="mt-20">
      <ul className="px-3">
        {(
          [
            {
              path: "/",
              icon: ChartPieIcon,
              label: "Dashboard",
            },
            {
              path: "/expenses",
              icon: MinusCircleIcon,
              label: "Expenses",
            },
            {
              path: "/income",
              icon: PlusCircleIcon,
              label: "Income",
            },
            {
              path: "/goals",
              icon: CurrencyDollarIcon,
              label: "Goals",
            },
            {
              path: "/loans",
              icon: ScaleIcon,
              label: "Loans",
            },
            {
              path: "/transactions",
              icon: ClipboardDocumentListIcon,
              label: "Transactions",
            },
            {
              path: "/settings",
              icon: Cog6ToothIcon,
              label: "Settings",
            },
            {
              path: "/about",
              icon: InformationCircleIcon,
              label: "About",
            },
            {
              path: "/help",
              icon: QuestionMarkCircleIcon,
              label: "Help",
            },
          ] as const
        ).map(({ path, icon, label }) => (
          <li key={path}>
            <Link
              onClick={onClickMenu}
              className="flex px-4 py-3 rounded-full text-inherit"
              to={path}
              activeProps={{
                className: "bg-gray-600 text-white",
              }}
            >
              {React.createElement(icon, {
                className: "w-6 h-6 mr-3 text-inherit",
              })}
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
