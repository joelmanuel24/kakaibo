import loansRoute from "..";

const borrowedRoute = loansRoute.createRoute({
  path: "/",
  component: Borrowed,
});

function Borrowed() {
  return <div>Borrowed</div>;
}

export default borrowedRoute;
