import React, { Component } from "react";
import "antd/dist/antd.css";
// import "./index.css";
import { Layout, Menu } from "antd";
import allOrders from "../icons/allOrders.svg";
import allPayments from "../icons/allPayments.svg";
import manualSettlement from "../icons/manualSettlement.svg";
import merchantProfile from "../icons/merchantProfile.svg";
import overview from "../icons/overview.svg";
// import TransMonitor from "../icons/TransMonitor.svg";
import pendingOrder from "../icons/pendingOrder.svg";
import unreconcilled from "../icons/unreconcilled.svg";
import reconcilledOrders from "../icons/reconcilledOrders.svg";
import reconciledPayment from "../icons/reconciledPayment.svg";
// import NavigationBar from "./NavigationBar";
// import Transaction from "./Transaction";
// import Table from "./Table";

const { Sider } = Layout;
export class SideNavbar extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    // console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    // const { collapsed } = this.state;
    return (
      <>
        <Sider
          style={{ padding: "5px", minHeight: "100vh" }}
          theme="light"
          className="mt-3 site-layout-background"
          width={250}
        >
          <span
            class="badge mt-3 mx-auto py-3 px-5 badge-pill badge-success"
            style={{ cursor: "pointer", fontSize: "14px" }}
          >
            Generate Invoice
          </span>
          <menu className="p-3 mt-2">Main</menu>
          <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item
              className=""
              key="0"
              icon={<img src={overview} alt="" />}
            >
              <small> Overview</small>
            </Menu.Item>
            <Menu.Item className="p-2">Payments</Menu.Item>
            <Menu.Item key="1" icon={<img src={allPayments} alt="" />}>
              <small> All payments</small>
            </Menu.Item>
            <Menu.Item key="2" icon={<img src={reconciledPayment} alt="" />}>
              {" "}
              <small> Reconcilled Payments</small>
            </Menu.Item>
            <Menu.Item key="3" icon={<img src={unreconcilled} alt="" />}>
              <small> Un-reconcilled Payments</small>
            </Menu.Item>
            <Menu.Item key="4" icon={<img src={manualSettlement} alt="" />}>
              <small> Manual Settlement</small>
            </Menu.Item>

            <Menu.Item>Orders</Menu.Item>
            <Menu.Item key="5" icon={<img src={allOrders} alt="" />}>
              <small> All Orders</small>
            </Menu.Item>
            <Menu.Item key="6" icon={<img src={pendingOrder} alt="" />}>
              <small> Pending Orders</small>
            </Menu.Item>
            <Menu.Item key="7" icon={<img src={reconcilledOrders} alt="" />}>
              <small> Reconcilled Orders</small>
            </Menu.Item>
            <Menu.Item key="8" icon={<img src={merchantProfile} alt="" />}>
              {" "}
              <small> Merchant Profile</small>
            </Menu.Item>
          </Menu>
        </Sider>
      </>
    );
  }
}

export default SideNavbar;
