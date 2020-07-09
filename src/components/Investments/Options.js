import React, { Component } from "react";

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Options</h1>
        <h3>What is an Option?</h3>
        <p>
          Option - the right to buy or sell a security at a predetermined price
          for a predetermined period of time.
        </p>
        <ul>
          <li>
            Essentially you pay x dollars to freeze the stock price at a certain
            price for a certain period{" "}
          </li>
          <ul>
            <li>Strike price - the price that you’re freezing </li>
            <li>Expiry Date - when the option ends </li>
            <li>Premium - how much you pay to freeze (per stock) </li>
          </ul>
          <li>Smallest option duration is 1 week </li>
          <li>Each option is 100 stocks </li>
        </ul>
        <h3>Option Vocabulary</h3>
        <ul>
          <li>
            Exercising the option - you actually pay for the stock at the strike
            price{" "}
          </li>
          <li>
            Open interest - the number of options available in the market{" "}
          </li>
          <li>At the money - strike price = current price </li>
          <li>
            In the money - strike price is lower (call) or higher (put) than
            current price{" "}
          </li>
          <li>
            Out of the money - strike is higher (call) or lower (put) than
            current{" "}
          </li>
          <li>Volatility </li>
          <ul>
            <li>A good volatility is under 15 </li>
          </ul>
          <li>
            Implied Volatility - how much is a particular option price going to
            change{" "}
          </li>
          <ul>
            <li>≈ call price + put price for a certain duration & strike </li>
          </ul>
          <li>
            Note that the OPTION PRICE changes at the SAME RATE as the STOCK
            PRICE only after the stock meets the strike price.
          </li>
          <ul>
            <li>
              Ex: 100 current, 105 strike, 7 premium, then the call price is
              about 9 when the stock is 107{" "}
            </li>
          </ul>
        </ul>
        <h3>CALL vs. PUT Options</h3>
        <ul>
          <li>
            A call option is where you're betting that the stock price will
            increase above a certain value (strike price + premium)
          </li>
          <li>
            A put option is where you're betting that the stock price will
            decrease below a certain value (strike price - premium)
          </li>
        </ul>
        <h3>BUYING vs. SELLING Options</h3>
        <ul>
          <li>You can BUY or SELL a CALL or PUT option </li>
          <ul>
            <li>Buy a put when </li>
            <ul>
              <li>You want capital gain </li>
              <li>
                You want insurance - if you are currently holding a long-term
                stock that will go down short term, then you can buy a put to
                make money off the decrease{" "}
              </li>
              <ul>
                <li>
                  Similar to paying insurance premium like the option premium{" "}
                </li>
              </ul>
            </ul>
            <li>Sell a put when </li>
            <ul>
              <li>you want to buy the stock at a lower price </li>
              <li>
                You think the stock will go down, but not by that much (income){" "}
              </li>
            </ul>
            <li>Sell a call when </li>
            <ul>
              <li>
                You think a stock will go up, but not by that much (income){" "}
              </li>
              <li>You think the stock will go down </li>
            </ul>
            <li>
              You can only sell options that you don’t own at a certain status
              (option level 2){" "}
            </li>
          </ul>
        </ul>
        <h3>NAKED vs. COVERED Options</h3>
        <ul>
          <li>
            Naked Call - if you don’t have the stock and you sell a call, then
            you will have to short sell 100 stocks at the strike price{" "}
          </li>
          <li>
            Covered Call - you have 100 stocks and you sell a call, then you
            will sell your 100 stocks at the strike price{" "}
          </li>
          <li>
            Naked Put - you sell put and it goes below the strike price, forcing
            you to buy 100 stocks at that price{" "}
          </li>
        </ul>
      </div>
    );
  }
}

export default Options;
