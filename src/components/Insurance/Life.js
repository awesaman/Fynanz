import React, { Component } from "react";
import data from "../../data/Insurance/Life.json";
import nestedBullets from "../../utils/nestedBullets.js";

class Life extends Component {
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
        <ol>{data.subtopics[0].list.map((s) => nestedBullets(s))}</ol>
      </div>
    );
  }
}

export default Life;
