import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Banking from "./Banking";

class Savings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-body">
        {/* <Route path="/banking" component={Banking} /> */}
        <h1>Savings</h1>
        <h3>How much should you save?</h3>
        <p>
          About 15% is a good amount to set aside. This should be put into some
          sort of retirement account. Your objective with this is to lower your
          taxes.
        </p>
        <h3>What do we spend money on?</h3>
        <p>There are 3 types of expenses:</p>
        <ul>
          <li>Regulatory - food, rent, utilities</li>
          <li>
            Discretionary - clothes, entertainment, and anything non-essential
          </li>
          <li>Capital - larger items</li>
        </ul>
        <h3>Hope for the best, plan for the worst.</h3>
        <p>
          You should also have an emergency fund that can support you for 3-12
          months in case something goes wrong
        </p>
        <h3>When can you use your savings?</h3>
        <p>
          Liquidity, in terms of finance, is defined as the ability to withdraw
          and use money. Higher liquidity is preferred, but it usually comes at
          the cost of lower interest rates.
        </p>
      </div>
    );
  }
}

export default Savings;
