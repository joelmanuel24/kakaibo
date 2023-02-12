import goalsRoute from ".."

const goalViewRoute = goalsRoute.createRoute({
  path: "view",
  component: GoalView
})

function GoalView() {
  return (
    <div>
      asd
    </div>
  )
}

export default goalViewRoute

