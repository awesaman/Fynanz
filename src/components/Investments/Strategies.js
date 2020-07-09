import React, { Component } from "react";
import Spreads from "../../images/Spreads.jpg";
class Strategies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Strategies</h1>
        <img src={Spreads} className="image-handwritten" />
      </div>
    );
  }
}

export default Strategies;
