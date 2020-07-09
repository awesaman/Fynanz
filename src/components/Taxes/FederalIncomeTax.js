import React, { Component } from "react";
import TaxTable from "../../images/TaxTable.png";
import TaxBrackets from "../../images/TaxBrackets.png";

class FederalIncomeTax extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Federal Income Tax</h1>
        <img src={TaxBrackets} className="image" />
        <p>
          The table above shows the Marginal Income Tax Brackets. Every American
          has to pay these taxes for the ranges that their salary covers.
        </p>
        <p>
          The tables below show the difference between the tax calculations for
          someone who puts as much money as possible into a 401k versus someone
          who doesn't.
        </p>
        <img src={TaxTable} className="image-handwritten" />
        <p>
          The bottom line is, invest as much money as you can into your
          retirement accounts like your 401k and Roth IRA because it saves
          thousands.
        </p>
      </div>
    );
  }
}

export default FederalIncomeTax;
