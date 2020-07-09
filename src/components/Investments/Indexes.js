import React, { Component } from "react";

class Indexes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Indexes</h1>
        <p>
          Indexes are specific collections of stocks that you can purchase all
          at once.
        </p>
        <ul>
          <li>
            S&P 500 - indicator of how the market is doing - 500 best stocks
          </li>
          <li>
            DOW Industrial Average - set of 30 stocks that represents the
            average
          </li>
          <li>NASDAQ 100 - 100 top tech companies</li>
          <li>Small cap (S&P 600), Mid Cap (S&P 400), Large Cap (S&P 500)</li>
          <li>US (domestic) stocks</li>
          <li>International stock</li>
          <ul>
            <li>Developed</li>
            <li>Developing</li>
          </ul>
          <li>
            ETF (Exchange Traded Funds) - trade the entire index at a time (Ex.
            S&P 500)
          </li>
          <ul>
            <li>Very similar to index funds (passive mutual funds)</li>
          </ul>
          <li>Bond Indexes - collections of bonds</li>
        </ul>
      </div>
    );
  }
}

export default Indexes;
