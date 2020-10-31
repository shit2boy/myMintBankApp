import React, { Component } from "react";
import Navigationbar from "./components/Navigationbar";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Col, Row } from "react-bootstrap";
import Sidebar from "./components/sideBar";
// import MyCharts from "./components/chart";
import Transaction from "./components/Transactions";
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
            <Col className="ml0" sm={3}>
              <Sidebar />
            </Col>
            <Col sm={9}>
              <Row>
                <Transaction />
              </Row>
              <Row>
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
