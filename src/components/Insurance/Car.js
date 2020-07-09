import React, { Component } from "react";
import IncomePlanning from "../Retirement/IncomePlanning";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Car Insurance</h1>
        <h3>3 Components</h3>
        <ol>
          <li>Comprehensive (cheapest), which covers</li>
          <ul>
            <li>Flood</li>
            <li>Theft</li>
            <li>Vandalism</li>
            <li>Hail</li>
            <li>Anything that’s not your fault</li>
          </ul>
          <li>Liability, which covers</li>
          <ul>
            <li>Property Damage</li>
            <li>Bodily Injury</li>
          </ul>
          <li>Collision (most expensive)</li>
          <ul>
            <li>Covers you when it’s your fault and your car got damaged</li>
          </ul>
        </ol>
        <h3>Pricing</h3>
        <ul>
          <li>
            Prices depend on factors like, driving history, credit history, age,
            sex, family, and your car
          </li>
          <li>Very good price is $300 per 6 months per car per person</li>
          <li>
            Usually get a towing service ($5 extra) and a rental service if you
            don’t have a second car
          </li>
          <li>Insurance is cheap in California</li>
        </ul>
        <h3>Example Insurance</h3>
        <ul>
          <li>
            Comprehensive and Collision have deductibles
            <ul>
              <li>A good deductible is $500</li>
              <li>The lower the deductible, the higher the premium</li>
            </ul>
          </li>
          <li>
            Liability has 3 parts:
            <ol>
              <li>
                <strong>100</strong> meaning $100k per person in bodily injury
              </li>
              <li>
                <strong>250</strong> meaning $250k per accident in bodily injury
              </li>
              <li>
                <strong>100</strong> meaning $100k per accident in property
                damage
              </li>
            </ol>
          </li>
        </ul>
      </div>
    );
  }
}

export default Car;
