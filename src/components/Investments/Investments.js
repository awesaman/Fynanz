import React, { Component } from "react";

class Investments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Investments</h1>
        <h3>What is a stock?</h3>
        <p>
          A stock, or share, is a very small portion of a public company. You
          buy a stock when you anticipate an increase in the stock price, and
          you sell a stock when you anticipate a decrease in the stock price.
        </p>

        <h3>Investment Vocabulary</h3>
        <ul>
          <li>
            EPS (earnings per share) - total earnings (profit) / total number of
            shares
          </li>
          <li>
            PE Ratio - 100* price of share / EPS - should be no more than twice
            growth rate
          </li>
          <li>Float - Number of Total Shares Outstanding</li>
          <li>
            Market Cap (capitalization) - size of a company = price of stock *
            number of shares
          </li>
          <li>
            Only companies with 1 trillion market cap - Apple, Amazon,
            Microsoft, Google
          </li>
          <li>Total Revenue - total sales</li>
          <li>EBITA - earnings before interest, taxes, and amortization</li>
          <li>Market Return - average ROI on total market indexes</li>
          <li>
            Growth Rate - rate of increase of earnings, general half of PE ratio
          </li>
          <li>
            Margin - a brokerage account with margin is an account that will
            take loans for you when you need it to invest
          </li>
          <li>Short selling - sell before you buy</li>
          <li>Bid / Offer Price - the price you get for selling a stock</li>
          <li>Ask / Buying Price - the price you pay for buying a stock</li>
          <li>Market Order - you buy at the ask price</li>
          <li>
            Limit Order - you will only buy/sell a stock at your own desired
            price assuming it reaches that price
          </li>
        </ul>
      </div>
    );
  }
}

export default Investments;
