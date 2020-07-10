import React, { Component } from "react";
import data from "../../data/Insurance/House.json";
import nestedBullets from "../../utils/nestedBullets.js";

class House extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>{data.header}</h1>
        <p>{data.intro}</p>
        <ul>{data.subtopics[0].list.map((s) => nestedBullets(s))}</ul>
      </div>
    );
  }
}

export default House;
