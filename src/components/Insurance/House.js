import React, { Component } from "react";

class House extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>House Insurance</h1>
        <p>
          House Insurance is the most expensive type of insurance. It covers
          damages to your house.{" "}
        </p>
        <ul>
          <li>
            Buy insurance for a house slightly more expensive than your own
          </li>
          <ul>
            <li>
              If you have a 400k house, buy a 450k plan, because you would need
              about 50k to remove debris before rebuilding
            </li>
          </ul>
          <li>Deductible is typically 1% of your home insurance plan</li>
          <li>By default, floods and earthquakes are usually not covered</li>
          <ul>
            <li>
              Depending on your location, add it through federal government
            </li>
          </ul>
          <li>
            Covers the contents of the house and the structure of the house
          </li>
          <ul>
            <li>
              Generally buy the one that covers the most things (best policy)
            </li>
          </ul>
          <li>
            Anything to do with water may not be covered by your insurance plan,
            so be careful
          </li>
        </ul>
      </div>
    );
  }
}

export default House;
