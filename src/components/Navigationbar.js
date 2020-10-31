import React, { Component } from "react";
import Transmonitor from "../icons/TransMonitor.svg";

export class Navigationbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
        <a class="navbar-brand" href="#">
          <img src={Transmonitor} width="30" height="30" alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-list-2"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-list-2">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigationbar;
