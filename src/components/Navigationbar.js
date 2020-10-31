import React, { Component } from "react";
import Transmonitor from "../icons/TransMonitor.svg";

export class Navigationbar extends Component {
  render() {
    return (
      <div class="bgNav">
        <nav class="navbar navbar-expand-md bgNav">
          <a href="#1" class="navbar-brand">
            <img src={Transmonitor} alt="logo" />
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarCollapse">
            <form class="form-inline mx-auto">
              <input
                type="search"
                class="form-control mr-sm-2 w-100"
                placeholder="Search"
              />
            </form>
            <div class="navbar-nav mr-auto">
              <a href="#2" class="nav-item nav-link active">
                Home
              </a>
              <a href="#3" class="nav-item nav-link">
                About
              </a>
              <a href="#4" class="nav-item nav-link">
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
