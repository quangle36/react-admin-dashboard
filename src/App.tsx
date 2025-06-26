
import React from "react"
import { PATH } from "./configs"
import { useLocation } from "react-router-dom"

// const EmployeeList = React.lazy(() => import('./pages/employee').then((module) => ({ default: module.EmployeeList })));
// const EmployeeShow = React.lazy(() => import('./pages/employee').then((module) => ({ default: module.EmployeeShow })));
// const EmployeeCreate = React.lazy(() => import('./pages/employee').then((module) => ({ default: module.EmployeeCreate })));
// const EmployeeEdit = React.lazy(() => import('./pages/employee').then((module) => ({ default: module.EmployeeEdit })));
// import EmployeeList from "./pages/employee/list"
// import EmployeeShow from "./pages/employee/show"
// import EmployeeCreate from "./pages/employee/create"
// import EmployeeEdit from "./pages/employee/edit"
import { MainRoute } from "./routes/main-route";
import TimeOutModal from "./components/modal/timeout-modal";

/*
authenticated
go to invoice -> login -> redirect to invoice

not login
home -> product -> checkout -> click Buy ->:
*/

function App() {
  const location = useLocation();

  React.useEffect(() => {
    const isExculed = location.pathname === PATH.LOGIN || location.pathname === PATH.REGISTER;
    if (!isExculed) {
      window.localStorage.setItem('previousUrl', location.pathname)
    }
  }, [location])

  return (
    <>
      <TimeOutModal />

      <MainRoute />
    </>
    
  )
}

export default App
