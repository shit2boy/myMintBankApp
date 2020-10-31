import React from "react";
import Dropdown from "./Dropdown";
import itemIcom from "../icons/itemIcom.svg";
import { Transactions } from "../utils/DummyData";
import "font-awesome/css/font-awesome.min.css";

function Table() {
  return (
    <div className="container">
      <h3>Payments</h3>
      <div className=" d-flex justify-content-between">
        <p>
          Showing <span>20</span> out of 500 Payments
        </p>
        <div className="">
          <i className="fa fa-search" />
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <div>
          <Dropdown />
        </div>
      </div>
      <div className="row">
        <section className="col-md-12">
          <table>
            <tr>
              <th>Item Type</th>
              <th> Price</th>
              <th>Transaction Number</th>
              <th>Time</th>
              <th>Transaction Type</th>
            </tr>

            {Transactions.map((items) => (
              <tr key={items.id}>
                <td>
                  <img src={itemIcom} alt="itemIcons" className="p-2" />
                  {items.ItemType}
                </td>
                <td> {items.Price}</td>
                <td> {items.TransactionNo}</td>
                <td> {items.Time}</td>
                <td> {items.Payments}</td>
              </tr>
            ))}
          </table>
        </section>
      </div>
    </div>
  );
}

export default Table;
