import { PencilIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Outlet, useMatch, useParams, useSearch } from "@tanstack/react-router";
import React, { useState } from "react";
import { z } from "zod";
import FullPageModal from "../components/modal/full-page-modal";
import Page from "../components/page/page";
import RadialButton from "../components/radial-button/radial-button";
import { useQueryParams } from "../hooks/useQueryParams";
import RecentTransactions from "../widgets/recent-transactions";
import ShortcutsWidget from "../widgets/shortcuts";
import TotalExpenses from "../widgets/total-expenses";
import { rootRoute } from "./__root";

export const indexRoute = rootRoute.createRoute({
  path: "/",
  component: Dashboard,
});

function Dashboard() {
  const [isAddOpen, setIsAddOpen] = React.useState(false);
  const widgets = [TotalExpenses, ShortcutsWidget, RecentTransactions];

  const addButton = (
    // <button
    //   className="flex items-center px-3 py-3 shadow-md bg-cyan-900 text-cyan-50 rounded-xl"
    //   onClick={() => setIsAddOpen(true)}
    // >
    //   <PlusIcon className="w-6 h-6" />
    // </button>
    <RadialButton />
  );

  return (
    <Page title="Dashboard">
      <div>
        <button className="px-4 py-2">
          <PencilIcon className="w-4 h-4 ml-1 text-inherit" />
        </button>
      </div>
      <div>
        {widgets.map((w, i) => React.createElement(w, { key: i }))}
        <div className="fixed bottom-8 right-4">{addButton}</div>
        <Test />
      </div>
    </Page>
  );
}

function Test() {
  const {
    params: { addExpense },
  } = useQueryParams();
  if (addExpense !== "open") {
    return null;
  }
  return <div>test</div>;
}

export default Dashboard;
