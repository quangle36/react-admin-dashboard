
import React, { Suspense } from "react"
import { PATH } from "./configs"
import { Route, Routes } from "react-router-dom"

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

// components
import Sidebar from "./components/sidebar/sidebar"
import Headerbar from "./components/headerbar/headerbar"


function App() {

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 transition-all duration-300 ease-in-out lg:ml-[290px] ">
        <Headerbar />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <Suspense fallback={<>Loading...</>}>
            <Routes>
              <Route path={PATH.DASHBOARD} element={<Dashboard />} />
              <Route path={PATH.LOGIN} element={<Login />} />
              <Route path={PATH.REGISTER} element={<Register />} />
              <Route path={PATH.EMPLOYEE_LIST} element={<EmployeeList />} />
              <Route path={PATH.EMPLOYEE_CREATE} element={<EmployeeCreate />} />
              <Route path={PATH.EMPLOYEE_SHOW} element={<EmployeeShow />} />
              <Route path={PATH.EMPLOYEE_EDIT} element={<EmployeeEdit />} />

              <Route path={PATH.INVOICE_CREATE}  element={<InvoiceCreate />} />
              <Route path={PATH.INVOICE_LIST}  element={<InvoiceList />} />
            </Routes>
          </Suspense>
          
        </div>
      </div>
    </div>
  )
}

export default App
