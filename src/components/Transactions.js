import React from "react";
import MyCharts from "./chart";

const Transaction = ({ value, volume }) => {
  return (
    <div className="container">
      <div className=" row trans">
        <div className="col-3 ">
          <div className="d-flex justify-content-around p-3 daily">
            <div>
              {" "}
              <small className="d-block">Daily Transaction Volume</small>
              <strong>2,342</strong>
            </div>
            <MyCharts />
          </div>
        </div>
        <div className="col-3">
          <div className="d-flex justify-content-around p-3 daily">
            <div>
              {" "}
              <small className="d-block ">Daily Transaction value</small>
              <strong>&#8358;4,000,000</strong>
            </div>
            <MyCharts />
          </div>
        </div>
        <div className="col-3">
          <div className=" d-flex justify-content-around p-3 total">
            <div>
              {" "}
              <small className="d-block">Total Transaction value</small>
              <strong>452,000</strong>
            </div>
            <MyCharts />
          </div>
        </div>
        <div className="col-3">
          <div className=" d-flex justify-content-around p-3 total">
            <div>
              <small className="d-block">Total Transaction Volume</small>
              <strong>&#8358;4,000,000</strong>
            </div>
            <MyCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
