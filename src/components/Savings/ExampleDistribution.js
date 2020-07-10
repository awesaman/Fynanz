import React, { Component } from "react";
import ExampleDist from "../../images/ExampleDist.jpg";
import data from "../../data/Savings/ExampleDistribution.json";
import nestedBullets from "../../utils/nestedBullets";

class ExampleDistribution extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>{data.header}</h1>
        <img src={ExampleDist} className="image" />
      </div>
    );
  }
}

export default ExampleDistribution;
