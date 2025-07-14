import React from "react";
import { ErrorCatchComponent } from "../../components/error-boundary";

function Dashboard() {
  const [test, setTest] = React.useState(null);
  // Simulating some data fetching or processing
  return (
    <div>
      <h1>Dashboard</h1>
      <button type="button" onClick={() => setTest({})}>Test Error Boundary</button>

      <ErrorCatchComponent>
        {test}
      </ErrorCatchComponent>

    </div>
  )
}

export default Dashboard