import React, { Component } from "react";
import data from "../../data/Taxes/StockTax.json";
import nestedBullets from "../../utils/nestedBullets";

class StockTax extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>{data.header}</h1>
        <p>{data.subtopics[0].par}</p>
        <ul>{data.subtopics[0].list.map((s) => nestedBullets(s))}</ul>
      </div>
    );
  }
}

export default StockTax;
