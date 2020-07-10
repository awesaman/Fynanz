import React, { Component } from "react";
import Dividend from "../../images/Dividend.png";
class DividendStocks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Dividend Stocks</h1>
        <p>
          Dividends - companies pay a certain percentage of their profits to
          their investors
        </p>
        <li>1-5% of the stock price per year, paid quarterly </li>
        <li>
          S&P 500 gives about 2%, so investing in the market long term pays good
          dividend{" "}
        </li>
        <li>Most value companies pay dividend </li>
        <li>Most growth companies don’t pay dividend </li>
        <li>
          Keeping a stock for 20 will likely result in more coming from the
          dividend than the stock itself{" "}
        </li>
        <li>Make sure you reinvest the dividends, because it will compound </li>
        <li>Only do this with stocks that will last a long long time </li>
        <li>
          Look in the top 100 companies in the S&P 500, and the market itself{" "}
        </li>
        <li>There are also ETFs for dividend stocks only, like VIG </li>
        <li>Dividend amount - the dollar amount that is provided </li>
        <li>
          Dividend yield - the percentage of the stock price that the dividend
          amount is{" "}
        </li>
        <li>
          Always account for stock appreciation, resulting in total return =
          capital appreciation + dividend{" "}
        </li>
        <br></br>
        <img src={Dividend} className="image" />
      </div>
    );
  }
}

export default DividendStocks;
