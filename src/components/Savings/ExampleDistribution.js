import React, { Component } from "react";
import ExampleDist from "../../images/ExampleDist.jpg";

class ExampleDistribution extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Example Distribution</h1>
        <img src={ExampleDist} className="image" />
      </div>
    );
  }
}

export default ExampleDistribution;
