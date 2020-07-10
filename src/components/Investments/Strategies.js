import React, { Component } from "react";
import Spreads from "../../images/Spreads.jpg";
import data from "../../data/Investments/Strategies.json";
import nestedBullets from "../../utils/nestedBullets";

class Strategies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>{data.header}</h1>
        <img src={Spreads} className="image-handwritten" />
      </div>
    );
  }
}

export default Strategies;
