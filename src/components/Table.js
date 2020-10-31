import React from "react";
import Dropdown from "./Dropdown";
import itemIcom from "../icons/itemIcom.svg";
import { Transactions } from "../utils/DummyData";

function Table() {
  return (
    <div className="container mt-4">
      <h3>Payments</h3>
      <div className="mb-3 d-flex justify-content-between">
        <p>
          Showing <span className="text-info">20</span> out of 500 Payments
        </p>
        <form className=" w-50">
          {/* <i className="fa fa-search" /> */}
          <input className="form-control" type="text" placeholder="Search" />
        </form>
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

                {items.Payments === "Pending" && (
                  <td>
                    {" "}
                    <span className="border rounded p-1 btn-outline-warning">
                      {" "}
                      &#9679; {items.Payments}
                    </span>
                  </td>
                )}
                {items.Payments === "Reconcilled" && (
                  <td>
                    <span class=" border rounded p-1 btn-outline-success">
                      {" "}
                      &#9679; {items.Payments}
                    </span>
                  </td>
                )}
                {items.Payments !== "Reconcilled" &&
                  items.Payments !== "Pending" && (
                    <td>
                      {" "}
                      <span className="border rounded p-1 btn-outline-secondary">
                        {" "}
                        &#9679; {items.Payments}
                      </span>
                    </td>
                  )}
              </tr>
            ))}
          </table>
        </section>
      </div>
    </div>
  );
}

export default Table;
