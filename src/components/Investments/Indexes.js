import React, { Component } from "react";
import data from "../../data/Investments/Indexes.json";
import nestedBullets from "../../utils/nestedBullets";

class Indexes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>{data.header}</h1>
        <p>{data.intro}</p>
        <h3>{data.subtopics[0].subheading}</h3>
        <ul>{data.subtopics[0].list.map((s) => nestedBullets(s))}</ul>
        <h3>{data.subtopics[1].subheading}</h3>
        <ul>{data.subtopics[1].list.map((s) => nestedBullets(s))}</ul>
      </div>
    );
  }
}

export default Indexes;
