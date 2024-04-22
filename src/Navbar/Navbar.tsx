import SearchIcon from "../assets/search.svg?react";
import BellIcon from "../assets/bell.svg?react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm fixed-top justify-content-end">
      <div className="container">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 me-5 gap-3">
            <li className="nav-item">
              <NavLink className="nav-link mr-1 mb-1 mt-0" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link mr-1 mb-1 mt-0" to="/consultants">
              Consultants
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link mr-1 mb-1 mt-0" to="/profiles">
            Profiles
              </NavLink>
            </li>
          </ul>
          <div className="d-flex flex-row align-items-center gap-2 me-4">
            <button
              className="btn btn-primary p-2 d-flex align-items-center"
              aria-current="page"
              role="button"
            >
              <SearchIcon />
            </button>
            <button className="btn btn-primary p-2 d-flex align-items-center" role="button">
              <BellIcon />
            </button>
          </div>
          <div className="text-end">
            <a role="button" className="d-block link-dark text-decoration-none">
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
