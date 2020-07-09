import React, { Component } from "react";

class Insurance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Insurance</h1>
        <h3>How Do Insurance Companies Make Money</h3>
        <ol>
          <li>Taking everyone’s premiums</li>
          <li>Investing it, especially in bonds</li>
          <li>
            They end up with more in premiums than needs to be spent to cover
            for people
          </li>
        </ol>
        <h3>Good Insurance Companies</h3>
        <ul>
          <li>State Farm</li>
          <li>All State</li>
          <li>Amica</li>
        </ul>
        <h3>Good Health Insurance Companies</h3>
        <ul>
          <li>BlueCrossBlueShield</li>
          <li>Cigna</li>
          <li>United HealthCare</li>
        </ul>
        <p>
          Never claim anything that you don’t need insurance’s help with because
          when you report something, your premium goes up.
        </p>
      </div>
    );
  }
}

export default Insurance;
