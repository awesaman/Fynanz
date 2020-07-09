import React, { Component } from "react";

class StateTax extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>State Tax</h1>
        <h3>3 Types of State Tax</h3>
        <ol>
          <li>Income Tax - Extra tax on your salary</li>
          <ul>
            <li>Paid based on the amount you earn (not in your control)</li>
          </ul>
          <li>Property Tax</li>
          <ul>
            <li>Based on the size of your house</li>
          </ul>
          <li>Sales Tax</li>
          <ul>
            <li>Not applied to groceries</li>
          </ul>
        </ol>
        <h3>Examples of States' Tax Rates</h3>

        <p>Texas</p>
        <ul>
          <li>No Income Tax</li>
          <li>High Property Tax (2%)</li>
          <li>High Sales Tax (8.25%)</li>
        </ul>
        <p>Washington</p>
        <ul>
          <li>No Income Tax</li>
          <li>Medium Property Tax (1.3%), but they have expensive houses</li>
          <li>Medium Sales Tax (6.5%)</li>
        </ul>
        <p>New Hampshire</p>
        <ul>
          <li>No Sales Tax</li>
          <li>No Income Tax</li>
          <li>High Property Tax (2.2%), but they have cheap houses</li>
        </ul>
        <p>Oregon</p>
        <ul>
          <li>Medium Income Tax (8.5%)</li>
          <li>No sales tax</li>
          <li>Low Property Tax (1.04%)</li>
        </ul>
        <p>California</p>
        <ul>
          <li>High Income Tax (12.9%)</li>
          <li>Low property Tax (.77%), but they have expensive houses</li>
          <li>High Sales Tax (7.25)</li>
        </ul>
        <p>N.Y.</p>
        <ul>
          <li>High Income Tax (9.5%)</li>
          <li>Low property Tax (.9%), but they have expensive houses</li>
          <li>High Sales Tax (4.5%)</li>
        </ul>
      </div>
    );
  }
}

export default StateTax;
