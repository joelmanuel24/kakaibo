import loansRoute from "..";

const lendRoute = loansRoute.createRoute({
  path: "/lend",
  component: Lend,
});

function Lend() {
  return <div>Lend</div>;
}

export default lendRoute;
