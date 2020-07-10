import React, { Component } from "react";
import data from "../../data/Savings/Banking.json";
import nestedBullets from "../../utils/nestedBullets";

class Banking extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>{data.header}</h1>
        <h3>{data.subtopics[0].subheading}</h3>
        <ul>{data.subtopics[0].list.map((s) => nestedBullets(s))}</ul>
      </div>
    );
  }
}

export default Banking;
