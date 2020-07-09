import React, { Component } from "react";

class Taxes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Taxes</h1>
        <h3>Types of Tax Forms</h3>
        <ul>
          <li>W2 - for employees</li>
          <li>1099 - for contractors</li>
          <li>1099-MISC - for miscellaneous incomes</li>
        </ul>
        <h3>Vocabulary</h3>
        <ul>
          <li>
            Standard Deduction - initial amount that is not taxed (set by IRS)
          </li>
          <li>Marginal Tax Brackets - the rates in the table at the right</li>
          <li>
            Maximal Marginal Tax Rate - the highest bracket you’re paying in
          </li>
          <li>Effective Tax Rate - percentage of your total income paid </li>
        </ul>
        <h3>Types of Tax Savings</h3>
        <ul>
          <li>Taxable Income</li>
          <li>
            Tax Deferred Income - these allow you to pay taxes and get
            deductions now
          </li>
          <ul>
            <li>
              You are allowed to put 19,500 in your <strong>401k</strong>{" "}
              contribution{" "}
            </li>
          </ul>
          <li>
            Tax Free Income - when you invest (up to 6k per year) in a{" "}
            <strong>Roth IRA</strong>, the investment gains on that income is
            not taxed as it increases over the years
          </li>
        </ul>
      </div>
    );
  }
}

export default Taxes;
