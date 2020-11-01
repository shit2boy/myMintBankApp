import React from "react";
import MyCharts from "./chart";

const Transaction = ({ value, volume }) => {
  return (
    <div className="container">
      <div className=" row trans">
        <div className="col-sm-3  ">
          <div className="d-flex justify-content-around p-2 daily">
            <div>
              {" "}
              <small className="d-block">Daily Transaction Volume</small>
              <h6>2,342</h6>
            </div>
            <MyCharts />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="d-flex justify-content-around p-2 daily">
            <div>
              {" "}
              <small className="d-block ">Daily Transaction value</small>
              <h6>&#8358;4,000,000</h6>
            </div>
            <MyCharts />
          </div>
        </div>
        <div className="col-sm-3">
          <div className=" d-flex justify-content-around p-2 total">
            <div>
              {" "}
              <small className="d-block">Total Transaction value</small>
              <h6>452,000</h6>
            </div>
            <MyCharts />
          </div>
        </div>
        <div className="col-sm-3">
          <div className=" d-flex justify-content-around p-2 total">
            <div>
              <small className="d-block">Total Transaction Volume</small>
              <h6>&#8358;4,000,000</h6>
            </div>
            <MyCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
