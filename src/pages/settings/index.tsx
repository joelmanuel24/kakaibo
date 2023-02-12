import {
  ChevronRightIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  WalletIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { Link, Outlet } from "@tanstack/react-router";
import Page from "../../components/page/page";
import { rootRoute } from "../__root";

const settingsRoute = rootRoute.createRoute({
  path: "settings",
  component: Settings,
});

function Settings() {
  return (
    <Page title="Settings">
      <></>
      <>
        <div className="mt-5">
          <Link
            to="/settings/general"
            className="flex items-center justify-between py-3 px-5"
          >
            <div className="flex items-center">
              <WrenchScrewdriverIcon className="h-6 w-6 mr-3" /> General
            </div>
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
          <Link
            to="/settings/paymentmethods"
            className="flex items-center justify-between py-3 px-5"
          >
            <div className="flex items-center">
              <WalletIcon className="h-6 w-6 mr-3" /> Payment Methods
            </div>
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
          <Link
            to="/settings/expense"
            className="flex items-center justify-between py-3 px-5"
          >
            <div className="flex items-center">
              <MinusCircleIcon className="h-6 w-6 mr-3" /> Expense Categories
            </div>
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
          <Link
            to="/settings/income"
            className="flex items-center justify-between py-3 px-5"
          >
            <div className="flex items-center">
              <PlusCircleIcon className="h-6 w-6 mr-3" /> Income Types
            </div>
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <Outlet />
      </>
    </Page>
  );
}

export default settingsRoute;
