import { Link, NavLink } from "react-router-dom";
import ThemeIcon from "./ThemeIcon";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm bg-dark text-light"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <NavLink className="nav-link" to="/">
                Ana Sayfa
              </NavLink>
              <NavLink className="nav-link" to="/hakkimizda">
                Hakkimizda
              </NavLink>
              <NavLink className="nav-link" to="/iletisim">
                Iletisim
              </NavLink>
              <ThemeIcon />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
