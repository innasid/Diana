import React from "react";
import DemoClassLifeCycle from "../components/DemoClassLifeCycle";
class DemoClass extends React.Component {
  state = { name: "DemoClass" };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            id="a1"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
        </form>
        <DemoClassLifeCycle name={this.state.name} />
      </div>
    );
  }
}
export default DemoClass;