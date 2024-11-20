import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-2xl font-bold">Expense Tracker</h1>
          <div className="flex space-x-6">
            <Link
              to="/"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              All Expense
            </Link>
            <Link
              to="/form"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Add Expense
            </Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto py-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
