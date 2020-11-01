import React, { Component } from "react";
import Transmonitor from "../icons/TransMonitor.svg";
import userImg from "../icons/userImg.png";

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
            {/* <i className="fa fa-search" /> */}
            <form className=" w-50 mx-auto">
              <input
                type="search"
                style={{ borderBottomStyle: "hidden", backgroundColor: "#fff" }}
                className="form-control mr-sm-2 w-100"
                placeholder="Search..."
              />
            </form>
            <div className="navbar-nav ">
              <a href="#2" className="nav-item nav-link active">
                Support
              </a>
              <a href="#3" className="nav-item nav-link">
                FAQ
              </a>
              <a href="#3" className="nav-item nav-link">
                Pricing
              </a>
              <a href="#4" className="nav-item nav-link">
                <i class="fa fa-bell" />
                <span class="badge badge-light">3</span>
              </a>
              <div>
                <small className="d-block">Hello</small>
                <small className="d-block">Oluwaleke Ojo</small>
              </div>

              <a href="#4" className="nav-item nav-link">
                <img
                  src={userImg}
                  alt="userImg"
                  className=" p-1 rounded-circle"
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigationbar;
