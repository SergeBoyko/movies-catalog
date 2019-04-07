import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";

const NavBar = ({ user, admin }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" data-test='NavBarComponent'>
      <a className="navbar-brand" href="/">
        Movies Catalog
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item" data-test='HomeComponent'>
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          {admin && user && (
            <React.Fragment>
              <li className="nav-item" data-test='CustomersComponent'>
                <NavLink exact to="/customers" className="nav-link">
                  Customers
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <li className="nav-item" data-test='RentalsComponent'>
                <NavLink exact to="/rentals" className="nav-link">
                  Rentals
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {!user && (
            <React.Fragment>
              <li className="nav-item" data-test='LoginComponent'>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item" data-test='RegisterComponent'>
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link">
                  {user.name}
                </NavLink>
              </li>
              <li className="nav-item" data-test='LogoutComponent'>
                <NavLink to="/logout" className="nav-link">
                  Logout
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
        <form className="form-inline my-2 my-lg-0" data-test='SearchBoxComponent'>
          <SearchBox />
        </form>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  user: PropTypes.object,
  admin: PropTypes.bool
}

export default NavBar;
