import React, { Component } from "react";

export class Demo2 extends Component {
  state = { counter: 5 };
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        <div>
          <h1 id="h1head">Enzyme Test Demo2</h1>
        </div>
        <div>
          <form>
            <p id="display1">Counter value is : {this.state.counter}</p>
            <button
              type="button"
              onClick={this.increment}
              id="btn"
              className="btn btn-primary"
            >
              Click me
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Demo2;