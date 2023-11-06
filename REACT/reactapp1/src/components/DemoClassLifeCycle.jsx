import React from "react";
class DemoClassLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "DemoClassLifeCycle" };
  }
  //   componentWillMount() {
  //     console.log("Iam in DemoClassLifeCycle componentWillMount method");
  //   }
  componentDidMount() {
    console.log("Iam in DemoClassLifeCycle componentDidMount method");
  }
  //  componentWillReceiveProps() {
  //     console.log("Iam in DemoClassLifeCycle componentWillReceiveProps method");
  //   }
  //   shouldComponentUpdate() {
  //     console.log("Iam in DemoClassLifeCycle shouldComponentUpdate method");
  //   }
  //   componentWillUPdate() {
  //     console.log("Iam in DemoClassLifeCycle componentWillUPdate method");
  //   }
  componentDidUpdate() {
    console.log("Iam in DemoClassLifeCycle componentDidUpdate method");
  }
  componentWillUnmount() {
    console.log("Iam in DemoClassLifeCycle componentWillUnmount method");
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}
export default DemoClassLifeCycle;