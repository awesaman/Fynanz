import React, { Component } from "react";

class StockTax extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Stock Tax</h1>
        <p>
          Here are the different ways we make money off of stocks AND how those
          earnings are taxed
        </p>
        <ul>
          <li>Capital Gains - selling stocks for profit</li>
          <ul>
            <li>
              Long Term - held for longer than 1 year (includes long-term
              options aka. leaps), charged @ 20%
            </li>
            <li>
              Short Term - held for less than 1 year, charged @ maximal marginal
              rate
            </li>
          </ul>
          <li>
            Interest Income - (not exactly stock related, unless you keep in
            brokerage instead of savings) charged @ maximal marginal rate
          </li>
          <li>
            Ordinary Income - for example, income from options is charged @
            maximal marginal rate
          </li>
          <li>Dividend Tax - currently charged @ 22%</li>
          <li>
            Capital Gains Distribution - mutual funds force you to pay taxes on
            their capital gains every year because you invest in them
          </li>
        </ul>
      </div>
    );
  }
}

export default StockTax;
