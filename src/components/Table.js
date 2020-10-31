import React from "react";
// import { Transactions } from "../utils/data";
import { Transactions } from "../utils/DummyData";

function Table() {
  return (
    <div className="container">
      <div class="row">
        <section class="col-md-12">
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
                  <svg
                    className="mr-3"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="18" cy="18" r="18" fill="#7F8FA4" />
                    <path
                      d="M15.3477 14.5977L12.2363 23H11.1523L8.10547 14.5977H9.20117L11.5273 21.2598C11.6016 21.4746 11.6582 21.7227 11.6973 22.0039H11.7207C11.752 21.7695 11.8164 21.5176 11.9141 21.248L14.2871 14.5977H15.3477ZM26.5156 14.5977L24.1426 23H22.9883L21.2598 16.8594C21.1855 16.5977 21.1406 16.3125 21.125 16.0039H21.1016C21.0781 16.293 21.0273 16.5742 20.9492 16.8477L19.209 23H18.0664L15.6055 14.5977H16.6895L18.4766 21.043C18.5508 21.3125 18.5977 21.5938 18.6172 21.8867H18.6465C18.666 21.6797 18.7266 21.3984 18.8281 21.043L20.6855 14.5977H21.6289L23.4102 21.0898C23.4727 21.3125 23.5195 21.5742 23.5508 21.875H23.5742C23.5898 21.6719 23.6426 21.4023 23.7324 21.0664L25.4492 14.5977H26.5156Z"
                      fill="white"
                    />
                  </svg>
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
