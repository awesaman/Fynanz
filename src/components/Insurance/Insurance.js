import React, { Component } from "react";
import data from "../../data/Insurance/Insurance.json";
import nestedBullets from "../../utils/nestedBullets";

class Insurance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>{data.header}</h1>
        <h3>{data.subtopics[0].subheading}</h3>
        <ol>{data.subtopics[0].list.map((s) => nestedBullets(s))}</ol>
        <h3>{data.subtopics[1].subheading}</h3>
        <ul>{data.subtopics[1].list.map((s) => nestedBullets(s))}</ul>
        <h3>{data.subtopics[2].subheading}</h3>
        <ul>{data.subtopics[2].list.map((s) => nestedBullets(s))}</ul>
        <p>{data.subtopics[2].par}</p>
      </div>
    );
  }
}

export default Insurance;
