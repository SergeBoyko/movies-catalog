import React, { Component } from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';


class NavBar extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { user, admin } = this.props;

    return (
      <div className="container" style={{ marginTop: '-60px' }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" data-test='NavBarComponent'>
          <a className="navbar-brand" href="/">
            Movies Catalog
        </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle

              className="navbar-toggler"
              type="button"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"

              tag="span"
              onClick={this.toggle}
              data-toggle="dropdown"
              aria-expanded={this.state.dropdownOpen}
            >
              <span className="navbar-toggler-icon" />
            </DropdownToggle>
            <DropdownMenu>
              {admin && user && (
                <div onClick={this.toggle}>
                  <NavLink exact to="/customers" className="nav-link">
                    Customers
                  </NavLink>
                </div>
              )}
              {user && (
                <div onClick={this.toggle}>
                  <NavLink exact to="/rentals" className="nav-link">
                    Rentals
                  </NavLink>
                </div>)}
              {!user && (
                <React.Fragment>
                  <div onClick={this.toggle}>
                    <NavLink to="/login" className="nav-link">
                      Login
                  </NavLink>
                  </div>
                  <div onClick={this.toggle}>
                    <NavLink to="/register" className="nav-link">
                      Register
                  </NavLink>
                  </div>
                </React.Fragment>
              )}
              {user && (
                <React.Fragment>
                  <div className="nav-item">
                    <NavLink to="/profile" className="nav-link">
                      {user.name}
                    </NavLink>
                  </div>
                  <div className="nav-item" data-test='LogoutComponent'>
                    <NavLink to="/logout" className="nav-link">
                      Logout
                  </NavLink>
                  </div>
                </React.Fragment>
              )}
              {/* <div onClick={this.toggle}>Custom dropdown item</div>
              <div onClick={this.toggle}>Custom dropdown item</div> */}
            </DropdownMenu>
          </Dropdown>
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
      </div >
    );
  }
};

NavBar.propTypes = {
  user: PropTypes.object,
  admin: PropTypes.bool
}

export default NavBar;
