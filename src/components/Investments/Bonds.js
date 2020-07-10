import React, { Component } from "react";
import BondMatrix from "../../images/BondMatrix.jpg";
import data from "../../data/Investments/Bonds.json";
import nestedBullets from "../../utils/nestedBullets";

class Bonds extends Component {
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
        <ol>{data.subtopics[0].list.map((s) => nestedBullets(s))}</ol>
        <h3>{data.subtopics[1].subheading}</h3>
        <p>{data.subtopics[1].par}</p>
        <ul>{data.subtopics[1].list.map((s) => nestedBullets(s))}</ul>
        <h3>{data.subtopics[2].subheading}</h3>
        <p>{data.subtopics[2].par}</p>
        <ul>{data.subtopics[2].list.map((s) => nestedBullets(s))}</ul>
        <h3>{data.subtopics[3].subheading}</h3>
        <ul>{data.subtopics[3].list.map((s) => nestedBullets(s))}</ul>
        <h3>{data.subtopics[4].subheading}</h3>
        <img src={BondMatrix} className="image" />
      </div>
    );
  }
}

export default Bonds;
