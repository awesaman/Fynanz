import React, { Component } from "react";

class Health extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Health Insurance</h1>
        <p>
          Health Insurance helps you pay for your medical needs. Usually, you
          get it through your employer, so you should probably just choose one
          of the options they offer you. They will offer you lower premium for
          higher deductible and copay, which is probably preferable.
        </p>
        <h3>Terminology</h3>
        <ul>
          <li>Premium - cost of having insurance at all</li>
          <li>Deductible - how much you pay before insurance covers</li>
          <li>Copay - how much you pay at every visit</li>
          <li>
            Copremium - the percentage of the amount past the deductible that
            you still have to pay
          </li>
          <li>Copay on prescription is separate</li>
        </ul>
        <p>
          Generally, go with the low premium, high deductible options unless you
          already know you have to get a surgery this year.
        </p>
      </div>
    );
  }
}

export default Health;
