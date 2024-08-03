import React from 'react';
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

function Navbar({ cartAmount }) {
  const { isAuthenticated, logout } = useAuth();  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-secondary">
      <div className="container-fluid px-4">
        <NavLink
          className={({ isActive }) =>
            `navbar-brand nav-link px-2 ${
              isActive ? "text-danger" : "text-black"
            }`
          }
          to={"/"}
        >
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link px-2 ${isActive ? "text-danger" : "text-black"}`
                }
                to={"/cart"}
              >
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link px-2 ${isActive ? "text-danger" : "text-black"}`
                }
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link px-2 ${isActive ? "text-danger" : "text-black"}`
                }
                to={"/contact"}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link px-2 ${isActive ? "text-danger" : "text-black"}`
                }
                to={"/dashboard"}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>

          
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!isAuthenticated ? (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link px-2 ${isActive ? "text-danger" : "text-black"}`
                  }
                  to={"/login"}
                >
                  Login
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <button
                  className="nav-link px-2 bg-transparent border-0 text-black"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
