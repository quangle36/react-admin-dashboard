import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { PATH } from "../configs";
import { Home } from "../pages/home";

// routes
import AuthRoute from "./auth-route";
import GuestRoute from "./guest-route";

// layout
import Template1 from "../layouts/template1";

// pages
const Dashboard = React.lazy(() => import('../pages/dashboard'));
const Login = React.lazy(() => import('../pages/login'));
const Register = React.lazy(() => import('../pages/register'));
const EmployeeList = React.lazy(() => import('../pages/employee/list'));
const EmployeeShow = React.lazy(() => import('../pages/employee/show'));
const EmployeeCreate = React.lazy(() => import('../pages/employee/create'));
const EmployeeEdit = React.lazy(() => import('../pages/employee/edit'));
const InvoiceCreate = React.lazy(() => import('../pages/invoice/create'));
const InvoiceList = React.lazy(() => import('../pages/invoice/list'));

function renderMainRoutes() {

  const routesConfig = [
    {
      path: PATH.ROOT,
      component: Dashboard,
      guard: AuthRoute,
      layout: Template1
    },
    {
      path: PATH.HOME,
      component: Home,
    },
    {
      path: PATH.LOGIN,
      component: Login,
      guard: GuestRoute
    },
    {
      path: PATH.REGISTER,
      component: Register,
      guard: GuestRoute
    },
    {
      path: PATH.EMPLOYEE_LIST,
      component: EmployeeList,
      guard: AuthRoute,
      layout: Template1
    },
    {
      path: PATH.EMPLOYEE_SHOW,
      component: EmployeeShow,
      guard: AuthRoute,
      layout: Template1
    },
    {
      path: PATH.EMPLOYEE_CREATE,
      component: EmployeeCreate,
      guard: AuthRoute,
      layout: Template1
    },
    {
      path: PATH.EMPLOYEE_EDIT,
      component: EmployeeEdit,
      guard: AuthRoute,
      layout: Template1
    },
     {
      path: PATH.INVOICE_CREATE,
      component: InvoiceCreate,
      guard: AuthRoute,
      layout: Template1
    },
    {
      path: PATH.INVOICE_LIST,
      component: InvoiceList,
      guard: AuthRoute,
      layout: Template1
    },
  ]

  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          {routesConfig.map(route => {
            const Guard = route?.guard || React.Fragment; // <AuthRoute></AuthRoute>
            const Component = route?.component || React.Fragment;
            const Layout = route?.layout || React.Fragment;

            return (
              <Route 
                path={route.path} 
                element={
                  <Guard>
                    <Layout>
                      <Component />
                    </Layout>
                  </Guard>
                }
              />
            )
          })}
        </Routes>
      </Suspense>
    </>
  )
}

export function MainRoute() {
  return renderMainRoutes();
}