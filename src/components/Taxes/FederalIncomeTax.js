import React, { Component } from "react";
import TaxTable from "../../images/TaxTable.png";
import TaxBrackets from "../../images/TaxBrackets.png";
import data from "../../data/Taxes/FederalIncomeTax.json";
import nestedBullets from "../../utils/nestedBullets";

class FederalIncomeTax extends Component {
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
        <img src={TaxBrackets} className="image" />
        <h3>{data.subtopics[1].subheading}</h3>
        <ul>{data.subtopics[1].list.map((s) => nestedBullets(s))}</ul>
        <p>{data.subtopics[1].par}</p>
        <img src={TaxTable} className="image-handwritten" />
        <p>{data.subtopics[2].par}</p>
      </div>
    );
  }
}

export default FederalIncomeTax;
