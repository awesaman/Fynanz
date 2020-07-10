import React, { Component } from "react";
import data from "../../data/Taxes/StateTax.json";
import nestedBullets from "../../utils/nestedBullets";

class StateTax extends Component {
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
        <p>{data.subtopics[1].par}</p>
        <ul>{data.subtopics[1].list.map((s) => nestedBullets(s))}</ul>
        <p>{data.subtopics[2].par}</p>
        <ul>{data.subtopics[2].list.map((s) => nestedBullets(s))}</ul>
        <p>{data.subtopics[3].par}</p>
        <ul>{data.subtopics[3].list.map((s) => nestedBullets(s))}</ul>
        <p>{data.subtopics[4].par}</p>
        <ul>{data.subtopics[4].list.map((s) => nestedBullets(s))}</ul>
        <p>{data.subtopics[5].par}</p>
        <ul>{data.subtopics[5].list.map((s) => nestedBullets(s))}</ul>
        <p>{data.subtopics[6].par}</p>
        <ul>{data.subtopics[6].list.map((s) => nestedBullets(s))}</ul>
      </div>
    );
  }
}

export default StateTax;
