//import { render } from "@testing-library/react";
import React from "react";
class Add extends React.Component {
  state = {
    num1: 0,
    num2: 0,
    num3: 0,
  };
  f1 = (event) => {
    event.preventDefault();
    let n1 = parseInt(this.state.num1);
    let n2 = parseInt(this.state.num2);
    let n3 = n1 + n2;
    this.setState({ num3: n3 });
  };

  render() {
    return (
      <div className="container col-5">
        <form onSubmit={this.f1}>
          <div className="form-group col-5 mt-1">
            <label htmlFor="a1">Enter Number 1 :</label>
            <input
              type="text"
              className="form-control-file"
              id="num1"
              defaultValue={this.state.num1}
              onChange={(e) => {
                this.setState({ num1: e.target.value });
              }}
            />
          </div>
          <div className="form-group col-5 mt-1">
            <label htmlFor="a2">Enter Number 2 : </label>
            <input
              type="text"
              className="form-control-file"
              id="num2"
              defaultValue={this.state.num2}
              onChange={(e) => {
                this.setState({ num2: e.target.value });
              }}
            />
          </div>
          <div className="form-group col-5 mt-1">
            <label htmlFor="a3">Result :</label>
            <input
              type="text"
              className="form-control-file"
              id="num3"
              value={this.state.num3}
              readOnly
            />
          </div>
          <div className="form-group column mt-3">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Add;

