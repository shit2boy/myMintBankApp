import React, { Component } from "react";
import Navigationbar from "./components/Navigationbar";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Col, Row, ProgressBar } from "react-bootstrap";
import Sidebar from "./components/sideBar";
// import MyCharts from "./components/chart";
import { dummyData } from "./utils/DummyData";
import { Select } from "antd";
import Transaction from "./components/Transactions";
import Graph from "./components/Graph";
import Table from "./components/Table";
import "font-awesome/css/font-awesome.min.css";

// const { Select } = antd;

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
        <div>
          <Navigationbar />
        </div>
        <Container fluid>
          <Row>
            <Col className="mb-1 p3 d-none d-lg-block" lg={2}>
              <Sidebar />
            </Col>
            <Col
              className="ml-lg-4 container"
              style={{ backgroundColor: "#f6f9fc" }}
            >
              <Row className="">
                <Transaction />
              </Row>
              <Row className="container mt-3">
                {/* <div>{this.state.date}</div> */}
                <Col className="">
                  <div
                    className=" p-3 mb-2 d-flex justify-content-between"
                    style={{ fontSize: "14px" }}
                  >
                    <strong>
                      {" "}
                      Today : {date.toLocaleDateString(undefined, formatDate)}
                    </strong>
                    <div>
                      <Select defaultValue="Jan1- Jun 1" style={{ width: 130 }}>
                        <Option value="Jul 1- Dec. 1">Jul 1- Dec. 1</Option>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Graph data={dummyData} />
                  </div>
                </Col>
                <Col className="m-1">
                  <div className="mt-1">
                    <h6>Orders</h6>
                    <ProgressBar className="mb-1">
                      <ProgressBar variant="success" now={80} key={1} />
                      <ProgressBar variant="warning" now={20} key={2} />
                    </ProgressBar>
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
                    <ProgressBar className="mb-1">
                      <ProgressBar variant="success" now={80} key={1} />
                      <ProgressBar variant="warning" now={20} key={2} />
                    </ProgressBar>
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
