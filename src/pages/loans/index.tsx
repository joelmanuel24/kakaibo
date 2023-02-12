import { Link, Outlet } from "@tanstack/react-router";
import Page from "../../components/page/page";
import { rootRoute } from "../__root";

const loansRoute = rootRoute.createRoute({
  path: "loans",
  component: Loans,
});

function Loans() {
  const tabs = (
    <>
      <Link
        to="/loans"
        className="py-2 px-3 text-center"
        activeOptions={{ exact: true }}
        activeProps={{ className: "border-b-2" }}
      >
        Borrowed
      </Link>
      <Link
        to="/loans/lend"
        className="py-2 px-3 text-center"
        activeProps={{ className: "border-b-2" }}
      >
        Lend
      </Link>
    </>
  );
  return (
    <Page title="Loans" tabs={tabs}>
      <></>
      <div className="py-10">
        <Outlet />
      </div>
    </Page>
  );
}

export default loansRoute;
