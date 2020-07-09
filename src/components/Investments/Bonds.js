import React, { Component } from "react";
import BondMatrix from "../../images/BondMatrix.jpg";

class Bonds extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Bonds</h1>
        <h3>How do companies raise money?</h3>
        <p>There are 3 primary methods:</p>
        <ol>
          <li>Take loans from the bank</li>
          <li>
            Sell shares in their stock by increasing the total number of shares,
            but this decreases their EPS
          </li>
          <li>Issuing bonds</li>
        </ol>
        <h3>What is a Bond?</h3>
        <p>
          Bonds are a way for you to loan money to entities that need money. You
          receive your money back along with some interest, which is dependent
          on the federal prime interest rate. They are also known as Credit,
          Debt, or Fixed Income Investing.
        </p>
        <ul>
          <li>Typically around the $100 mark</li>
          <li>The more stable a bond is, the lesser the interest rate</li>
          <li>
            Must be held for a specified duration, but you can sell it off
          </li>
        </ul>
        <h3>Types of Bonds</h3>
        <ul>
          <li>Corporate Bonds (companies) </li>
          <li>Treasury Bonds (government) </li>
          <ul>
            <li>Safest Type of Investment </li>
            <li>No state income tax on the interest </li>
          </ul>
          <li>Municipality bonds (non-treasury government bonds)</li>
          <ul>
            <li>Interest is TAX-EXEMPT </li>
          </ul>
        </ul>
        <h3>Extra Info</h3>
        <ul>
          <li>
            Bond Interest Rate - interest percent decided when you buy a bond{" "}
          </li>
          <li>Bond yield - percentage yielded based on bonds CURRENT price </li>
          <li>
            There is always a competition between bond yields and dividend yield{" "}
          </li>
          <ul>
            <li>
              In the short term, bond yields win because that’s their only job{" "}
            </li>
            <li>
              Bonds are safer than dividend because you will most likely get
              your money back{" "}
            </li>
            <li>In the long term, dividend investing yields much more</li>
          </ul>
        </ul>
        <h3>Bond Matrix</h3>
        <img src={BondMatrix} className="image" />
      </div>
    );
  }
}

export default Bonds;
