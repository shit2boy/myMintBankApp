import React, { Component } from "react";
import Transmonitor from "../icons/TransMonitor.svg";

export class Navigationbar extends Component {
  render() {
    return (
      <div className="bgNav">
        <nav className="navbar navbar-expand-md bgNav">
          <a href="#1" className="navbar-brand">
            <img src={Transmonitor} alt="logo" />
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <form className="form-inline mx-auto">
              <input
                type="search"
                className="form-control mr-sm-2 w-100"
                placeholder="Search"
              />
            </form>
            <div className="navbar-nav mr-auto">
              <a href="#2" className="nav-item nav-link active">
                Home
              </a>
              <a href="#3" className="nav-item nav-link">
                About
              </a>
              <a href="#4" className="nav-item nav-link">
                Products
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigationbar;
