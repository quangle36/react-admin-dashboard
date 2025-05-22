
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard"
import Login from "./pages/login"
import Register from "./pages/register"

import EmployeeList from "./pages/employee/list"
import EmployeeShow from "./pages/employee/show"
import EmployeeCreate from "./pages/employee/create"
import EmployeeEdit from "./pages/employee/edit"
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
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/employee/list" element={<EmployeeList />} />
            <Route path="/employee/create" element={<EmployeeCreate />} />
            <Route path="/employee/show/:id" element={<EmployeeShow />} />
            <Route path="/employee/edit/:id" element={<EmployeeEdit />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
