import React, { Component } from "react";

class Banking extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Banking</h1>
        <h3>Types of Bank Accounts</h3>
        <ul>
          <li>
            Checking - interest &lt; 0.1%
            <ul>
              <li>For your day-to-day trasactions</li>
              <li>Use this for anything that you spend within 1 month</li>
            </ul>
          </li>
          <li>Savings - interest ≈ 1.5% in 2020 for an online account</li>
          <ul>
            <li>
              For anything fixed expenses that occur on a monthly or bimonthly
              basis
            </li>
            <li>
              Anything that doesn't fit in your CDs (this will be covered next)
              can go here
            </li>
            <li>
              ALWAYS get an ONLINE savings account rather than a bank savings
              account because the interest is 10 times better
            </li>
          </ul>
          <li>
            CD (Certificate of Deposit) - interest ≈ 1.5%-3% for 6 months in
            2020
            <ul>
              <li>
                You cannot withdraw from these accounts for the length of the
                term that is specified, but these provide more interest (low
                liquidity).
                <ul>
                  <li>
                    If you break the CD term agreement, then you lose 3 months
                    of interest generally.
                  </li>
                </ul>
              </li>
              <li>For your periodic expenses i.e. quarterly, annually, etc.</li>
              <li>
                Flex CDs - a new type of CD from which you are allowed to
                withdraw during the term (highest liquidity).
                <ul>
                  <li>
                    Great place for your emergency funds and even your other
                    expenses if you're getting a good interest rate
                  </li>
                  <li>
                    Interest varies, but it can easily be higher than an online
                    savings account at times.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Banking;
