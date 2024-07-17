import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { navbar_items } from "./Data";
import AuthService from "./AuthService";

class Navbar extends Component {
  state = { s: false, isAuthenticated: false, darkMode: false };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.addShadow();
    });

    document.addEventListener("DOMContentLoaded", () => {
      this.addShadow();
    });
    const isAuthenticated = AuthService.isAuthenticated();
    this.setState({ isAuthenticated });
  }

  toggleDarkMode = () => {
    const newDarkMode = !this.state.darkMode;
    this.setState({ darkMode: newDarkMode });

    document.body.classList.toggle("dark-mode", newDarkMode);
  };

  handleLogout = () => {
    AuthService.logout();
    this.setState({ isAuthenticated: false });
  };

  displayNavbarItems = () => {
    let items = navbar_items.map((item) => (
      <li className="nav-item me-lg-3 my-lg-0 my-2" key={Math.random()}>
        <NavLink
          className="nav-link text-capitalize position-relative hover"
          to={`/${item.name === "" ? "" : item.name}`}
        >
          <i className={`${item.icon} me-2`}></i>
          {item.name === "" ? "home" : item.name}
        </NavLink>
      </li>
    ));
    if (this.state.isAuthenticated) {
      items.push(
        <li className="nav-item me-lg-3 my-lg-0 my-2" key="logout">
          <button
            className="nav-link btn btn-link text-capitalize position-relative hover"
            onClick={this.handleLogout}
          >
            Logout
          </button>
        </li>
      );
    } else {
      items.push(
        <li className="nav-item me-lg-3 my-lg-0 my-2" key="login">
          <NavLink
            className="nav-link text-capitalize position-relative hover"
            to="/login"
          >
            Login
          </NavLink>
        </li>
      );
    }

    return items;
  };

  addShadow = () => {
    window.scrollY >= 80
      ? this.setState({ s: true })
      : this.setState({ s: false });
  };

  render() {
    return (
      <nav
        className={`navbar navbar-expand-lg ${
          this.state.darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        } text-dark fixed-top ${this.state.s ? "shadow-lg" : "shadow"}`}
      >
        <div className="container py-2">
          <Link className="navbar-brand" to="/">
            <img
              src="/favicon.ico"
              alt="favicon"
              className="me-2"
              width="50"
              height="50"
            />
            <span>S</span>upnits<span>C</span>lasses
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">{this.displayNavbarItems()}</ul>

            <div className="form-check form-switch ms-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="darkModeSwitch"
                checked={this.state.darkMode}
                onChange={this.toggleDarkMode}
              />
              <label className="form-check-label" htmlFor="darkModeSwitch">
                {this.state.darkMode ? "Dark Mode" : "Light Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
