import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import Hoc from "./Hoc";

function Dashboard() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Dashboard</h1>
      <nav>
        <ul className="list-unstyled">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link px-2 ${isActive ? "text-danger" : "text-black"}`
              }
              to={"users"}
            >
              Users
            </NavLink>
          </li>
          <hr style={{ maxWidth: "800px" }} />
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link px-2 ${isActive ? "text-danger" : "text-black"}`
              }
              to={"posts"}
            >
              Posts
            </NavLink>
          </li>
          <hr style={{ maxWidth: "800px" }} />
        </ul>
      </nav>

      <Hoc>
        <Outlet />
      </Hoc>
    </div>
  );
}

export default Dashboard;
