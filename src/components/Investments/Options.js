import React, { Component } from "react";
import PUTvsCALL from "../../images/PUTvsCALL.jpg";
import SellCallAndPut from "../../images/SellCallAndPut.jpg";
import SellPutSellCall from "../../images/SellPutSellCall.jpg";
import data from "../../data/Investments/Options.json";
import nestedBullets from "../../utils/nestedBullets";

class Options extends Component {
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
        <ul>{data.subtopics[0].list.map((s) => nestedBullets(s))}</ul>
        <h3>{data.subtopics[1].subheading}</h3>
        <ul>{data.subtopics[1].list.map((s) => nestedBullets(s))}</ul>
        <h3>{data.subtopics[2].subheading}</h3>
        <ul>{data.subtopics[2].list.map((s) => nestedBullets(s))}</ul>
        <img src={PUTvsCALL} className="image" />
        <h3>{data.subtopics[3].subheading}</h3>
        <ul>{data.subtopics[3].list.map((s) => nestedBullets(s))}</ul>
        <img src={SellCallAndPut} className="image" />
        <img src={SellPutSellCall} className="image" />
        <h3>{data.subtopics[4].subheading}</h3>
        <ul>{data.subtopics[4].list.map((s) => nestedBullets(s))}</ul>
      </div>
    );
  }
}

export default Options;
