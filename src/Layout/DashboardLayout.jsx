import React from "react";
import { Outlet, NavLink } from "react-router"; 

const DashboardLayout = () => {
  const linkClasses = ({ isActive }) =>
    `block px-4 py-3 rounded-lg font-medium transition-colors duration-200
    ${isActive ? "bg-[#944E63] text-white" : "text-gray-500 hover:bg-[#944E63] hover:text-white"}`;

  return (
    <div className="flex min-h-screen bg-[#F8EDE3]  ">
      {/* Sidebar */}
      <aside className="w-64 bg-[#F8EDE3] p-6 shadow-lg border-r-2 border-gray-500 sticky top-0 h-screen">
        <h2 className="text-2xl font-bold mb-8 text-[#3A0519]">Dashboard</h2>
        <nav className="flex flex-col space-y-3">
          <NavLink to="/dashboard" className={linkClasses}>
            Overview
          </NavLink>
          <NavLink to="addGroup" className={linkClasses}>
            Add group
          </NavLink>
          <NavLink to="allGroup" className={linkClasses}>
            All Group
          </NavLink>
          <NavLink to="myGroup" className={linkClasses}>
            My group
          </NavLink>
          <NavLink to="/" className={linkClasses}>
            Back to home
          </NavLink>

        </nav>

      </aside>

      {/* Content */}
      <main className="flex-1 p-8 bg-[#F8EDE3] shadow-inner rounded-l-3xl">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

