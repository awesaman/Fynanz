import React, { Component } from "react";
import data from "../../data/Savings/Savings.json";
import nestedBullets from "../../utils/nestedBullets";

class Savings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-body">
        <h1>{data.header}</h1>
        <h3>{data.subtopics[0].subheading}</h3>
        <p>{data.subtopics[0].par}</p>
        <h3>{data.subtopics[1].subheading}</h3>
        <p>{data.subtopics[1].par}</p>
        <ul>{data.subtopics[1].list.map((s) => nestedBullets(s))}</ul>
        <h3>{data.subtopics[2].subheading}</h3>
        <p>{data.subtopics[2].par}</p>
        <h3>{data.subtopics[3].subheading}</h3>
        <p>{data.subtopics[3].par}</p>
      </div>
    );
  }
}

export default Savings;
