import React, { Component } from "react";

class MutualFunds extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Mutual Funds</h1>
        <h3>What is a Mutual Fund?</h3>
        <p>
          A mutual fund is a collection of specially chosen stocks, typically
          managed by a portfolio manager. They decide what they think is going
          to go up, and you invest in their ability to analyze. It's called a
          mutual fund because the money that the portfolio manager uses is an
          aggregation of all the funds given to them by their investors.
        </p>
        <h3>What are the types of mutual funds</h3>
        <ul>
          <li>Active</li>
          <ul>
            <li>Costs roughly 1% of the total assets</li>
            <li>
              The manager is a real person who (hopefully) adds value to your
              investment
            </li>
          </ul>
          <li>Passive (a.k.a. Index Funds)</li>
          <ul>
            <li>Costs roughly .02-.2% of the total assets</li>
            <li>
              The manager might be electronic, meaning they don’t add any real
              value
            </li>
            <li>
              Vanguard is the largest mutual fund company, and it's known for
              its passive investing
            </li>
          </ul>
        </ul>
        <h3>What's the point?</h3>
        <ul>
          <li>Objective: to beat the market return of roughly 8%</li>
          <ul>
            <li>Only 10 - 15 % of mutual funds do this consistently</li>
            <li>
              Only choose those who have been successful over a long period of
              time (3,5,10,15 year ranges){" "}
            </li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default MutualFunds;
