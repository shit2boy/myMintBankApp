import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentType: "All",
    };
  }
  render() {
    return (
      <form>
        <label>
          Show : {""}
          <select className="p-1" value={this.state.paymentType}>
            <option value="Ford">All</option>
            <option value="Ford">Reconcilled</option>
            <option value="Volvo">Un-reconcilled</option>
            <option value="Fiat">Settled</option>
          </select>
        </label>
      </form>
    );
  }
}
export default Dropdown;
