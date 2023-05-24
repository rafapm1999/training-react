//import './NavBar.css';

import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "notActive")}
            to="/"
          >
            Home
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "notActive")}
            to="/about"
          >
            About
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "notActive")}
            to="/contact"
          >
            Contact
          </NavLink>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
