
import React, { Suspense } from "react"
import { PATH } from "./configs"
import { Route, Routes, useLocation } from "react-router-dom"

const Dashboard = React.lazy(() => import('./pages/dashboard'));
const Login = React.lazy(() => import('./pages/login'));
const Register = React.lazy(() => import('./pages/register'));

const EmployeeList = React.lazy(() => import('./pages/employee/list'));
const EmployeeShow = React.lazy(() => import('./pages/employee/show'));
const EmployeeCreate = React.lazy(() => import('./pages/employee/create'));
const EmployeeEdit = React.lazy(() => import('./pages/employee/edit'));
// const EmployeeList = React.lazy(() => import('./pages/employee').then((module) => ({ default: module.EmployeeList })));
// const EmployeeShow = React.lazy(() => import('./pages/employee').then((module) => ({ default: module.EmployeeShow })));
// const EmployeeCreate = React.lazy(() => import('./pages/employee').then((module) => ({ default: module.EmployeeCreate })));
// const EmployeeEdit = React.lazy(() => import('./pages/employee').then((module) => ({ default: module.EmployeeEdit })));
// import EmployeeList from "./pages/employee/list"
// import EmployeeShow from "./pages/employee/show"
// import EmployeeCreate from "./pages/employee/create"
// import EmployeeEdit from "./pages/employee/edit"
import InvoiceCreate from "./pages/invoice/create";
import InvoiceList from "./pages/invoice/list";
import { Home } from "./pages/home";

// components
import Template1 from "./layouts/template1";
import AuthRoute from "./routes/auth-route";
import GuestRoute from "./routes/guest-route";

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
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route 
            path={PATH.ROOT} 
            element={
              <AuthRoute>
                <Template1>
                  <Dashboard />
                </Template1>
              </AuthRoute>}
          />
          <Route path={PATH.HOME} element={<Home />} />
          <Route path={PATH.LOGIN} element={<GuestRoute><Login /></GuestRoute>} />
          <Route path={PATH.REGISTER} element={<GuestRoute><Register /></GuestRoute>} />

          <Route path={PATH.EMPLOYEE_LIST} element={<Template1><EmployeeList /></Template1>} />
          <Route path={PATH.EMPLOYEE_CREATE} element={<Template1><EmployeeCreate /></Template1>} />
          <Route path={PATH.EMPLOYEE_SHOW} element={<Template1><EmployeeShow /></Template1>} />
          <Route path={PATH.EMPLOYEE_EDIT} element={<Template1><EmployeeEdit /></Template1>} />

          <Route path={PATH.INVOICE_CREATE}  element={<Template1><InvoiceCreate /></Template1>} />
          <Route path={PATH.INVOICE_LIST}  element={<Template1><InvoiceList /></Template1>} />
        </Routes>
      </Suspense>
    </>
    
  )
}

export default App
