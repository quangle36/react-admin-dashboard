import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { PATH, ROLE } from "../configs";
import { Home } from "../pages/home";

// routes
import AuthRoute from "./auth-route";
import GuestRoute from "./guest-route";

// layout
import Template1 from "../layouts/template1";
import Template2 from "../layouts/template2";
import DefaultSpinner from "../components/ui/spinner/default-spinner";
import RoleRoute from "./role-route";

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
const Error403 = React.lazy(() => import('../pages/error/Error403'));


function renderTemplate(company: string = 'tony') {
  let template = Template1;

  switch (company) {
    case 'tony': {
      template = Template1;
      break;
    }
    case 'quang': {
      template = Template2;
      break;
    }
    default:
      break
  }
  return template
}

function renderMainRoutes() {



  const routesConfig = [
    {
      path: PATH.ROOT,
      component: Dashboard,
      guard: AuthRoute,
      layout: renderTemplate(),
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
      layout: Template1,
      requireRoles: [ROLE.ADMIN, ROLE.OPERATOR]
    },
    {
      path: PATH.EMPLOYEE_EDIT,
      component: EmployeeEdit,
      guard: AuthRoute,
      layout: Template1,
      requireRoles: [ROLE.ADMIN, ROLE.OPERATOR]
    },
     {
      path: PATH.INVOICE_CREATE,
      component: InvoiceCreate,
      guard: AuthRoute,
      layout: Template1,
      requireRoles: [ROLE.ADMIN, ROLE.OPERATOR]
    },
    {
      path: PATH.INVOICE_LIST,
      component: InvoiceList,
      guard: AuthRoute,
      layout: Template1
    },
     {
      path: PATH.ERROR_403,
      component: Error403,
    },
  ]

  return (
    <>
      <Suspense fallback={<DefaultSpinner />}>
        <Routes>
          {routesConfig.map(route => {
            const Guard = route?.guard || React.Fragment; // <AuthRoute></AuthRoute>
            const Component = route?.component || React.Fragment;
            const Layout = route?.layout || React.Fragment;
            const requireRoles = route?.requireRoles || [];

            return (
              <Route 
                path={route.path} 
                element={
                  <Guard>
                    <Layout>
                      <RoleRoute requireRoles={requireRoles}>
                        <Component />
                      </RoleRoute>
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