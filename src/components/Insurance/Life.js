import React, { Component } from "react";

class Life extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Life Insurance</h1>
        <p>
          Life Insurance ensures that your family is financially taken care of
          if you die early. Buy life insurance directly (not through your
          employer) once you have kids.
        </p>
        <h3>2 Types</h3>
        <ol>
          <li>
            Term Life - pay a low premium and hoping that you don’t have to use
            it
          </li>
          <ul>
            <li>But if you die, you family is taken care of</li>
            <li>
              Typically buy the longest term possible (30yr insurance) right
              before the age of 50
            </li>
          </ul>
          <li>Permanent Life - pay a high premium and it lasts forever</li>
          <ul>
            <li>Generally too expensive to buy</li>
            <li>You might consider this if you earn a lot when you’re young</li>
            <li>Slightly better for taxes</li>
          </ul>
        </ol>
      </div>
    );
  }
}

export default Life;
