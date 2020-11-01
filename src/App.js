import React, { Component } from "react";
import Navigationbar from "./components/Navigationbar";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Col, Row } from "react-bootstrap";
import Sidebar from "./components/sideBar";
import { Progress } from "antd";
// import MyCharts from "./components/chart";
import { dummyData } from "./utils/DummyData";
import { Select } from "antd";
import Transaction from "./components/Transactions";
import Graph from "./components/Graph";
import Table from "./components/Table";
import "font-awesome/css/font-awesome.min.css";

// const { Progress } = antd;

const { Option } = Select;
export class App extends Component {
  // state = {
  //   date: date.toLocaleDateString(undefined, formatDate),
  // };
  render() {
    const date = new Date();
    const formatDate = { day: "numeric", year: "numeric", month: "long" };
    return (
      <React.Fragment>
        <Navigationbar />
        <Container fluid>
          <Row>
            <Col className="mb-1 p3 d-none d-lg-block" lg={2}>
              <Sidebar />
            </Col>
            <Col
              className="ml-lg-4 container"
              style={{ backgroundColor: "#f6f9fc" }}
            >
              <Row className="mt-3">
                <Transaction />
              </Row>
              <Row className="container mt-3">
                {/* <div>{this.state.date}</div> */}
                <Col className="col-lg-8 col-sm col-md">
                  <div
                    className=" p-3 mb-2 d-flex justify-content-between"
                    style={{ fontSize: "14px" }}
                  >
                    <h5>
                      {" "}
                      Today : {date.toLocaleDateString(undefined, formatDate)}
                    </h5>
                    <div>
                      <Select defaultValue="Jan1- Jun 1" style={{ width: 130 }}>
                        <Option value="Jul 1- Dec. 1">Jul 1- Dec. 1</Option>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Graph />
                  </div>
                </Col>
                <Col className="m-1">
                  <div className="mt-1">
                    <h6>Orders</h6>
                    <Progress
                      percent={100}
                      success={{ percent: 80 }}
                      strokeColor="#FDC203"
                    />
                    <p>
                      Pending Orders: <span className=" text-warning"> 20</span>{" "}
                    </p>
                    <p>
                      Reconcilled Orders:{" "}
                      <span className=" text-success"> 80</span>
                    </p>
                    <p>
                      Total Payments: <span className="text-primary">100</span>
                    </p>
                  </div>
                  <hr />
                  <div className="mt-4">
                    {" "}
                    <h6>Payments</h6>
                    <Progress
                      percent={100}
                      success={{ percent: 80 }}
                      strokeColor="#FDC203"
                    />
                    <p>
                      Un-reconcilled Payments:{" "}
                      <span className=" text-warning"> 20</span>{" "}
                    </p>
                    <p>
                      Reconcilled Payments:{" "}
                      <span className=" text-success"> 80</span>
                    </p>
                    <p>
                      Total Payments: <span className="text-primary">100</span>
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="container">
                <Table />
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
