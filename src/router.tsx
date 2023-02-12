import {
  createReactRouter,
  RegisteredAllRouteInfo,
} from "@tanstack/react-router";
import { indexRoute } from "./pages";
import expensesRoute from "./pages/expenses";
import goalsRoute from "./pages/goals";
import loansRoute from "./pages/loans";
import borrowedRoute from "./pages/loans/borrowed";
import lendRoute from "./pages/loans/lend";
import settingsRoute from "./pages/settings";
import paymentMethodsRoute from "./pages/settings/payment-methods";
import transactionsRoute from "./pages/transactions";
import addTransactionRoute from "./pages/transactions/add";
import { rootRoute } from "./pages/__root";

const routeConfig = rootRoute.addChildren([
  indexRoute,
  expensesRoute,
  goalsRoute,
  loansRoute.addChildren([borrowedRoute, lendRoute]),
  transactionsRoute.addChildren([addTransactionRoute]),
  settingsRoute.addChildren([paymentMethodsRoute]),
]);

export const router = createReactRouter({
  routeConfig,
});

export type RouteIdKeys = RegisteredAllRouteInfo["routePaths"];

declare module "@tanstack/react-router" {
  interface RouterContext {
    // auth: AuthContext
  }
}
