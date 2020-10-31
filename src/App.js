import React, { Component } from "react";
import Navigationbar from "./components/Navigationbar";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Col, Row } from "react-bootstrap";
import Sidebar from "./components/sideBar";
// import MyCharts from "./components/chart";
import Transaction from "./components/Transactions";
import Graph from "./components/Graph";
import Table from "./components/Table";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Navigationbar />
        </div>
        <Container fluid>
          <Row>
            <Col className="mr-4 p3" sm={2}>
              <Sidebar />
            </Col>
            <Col className="ml-4" style={{ background: "#cccfd4" }}>
              <Row className="container">
                <Transaction />
              </Row>
              <Row>
                <Graph />
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
