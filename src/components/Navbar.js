import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="main-navbar">
        <ul>
          {/* change first one to be a logo */}
          <li className="navbar-entry">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          {/* <div className="drop"> */}
          <li className="navbar-entry">
            <Link to="/savings" className="link">
              Savings
            </Link>
          </li>
          {/* <div className="dropdown">
              <Link to="/savings/banking" className="link">
                Banking
              </Link>
            </div>
          </div> */}
          <li className="navbar-entry">
            <Link to="/investments" className="link">
              Investments
            </Link>
          </li>
          <li className="navbar-entry">
            <Link to="/insurance" className="link">
              Insurance
            </Link>
          </li>
          <li className="navbar-entry">
            <Link to="/taxes" className="link">
              Taxes
            </Link>
          </li>
          <li className="navbar-entry">
            <Link to="/retirement" className="link">
              Retirement
            </Link>
          </li>
          <li className="navbar-entry">
            <Link to="/RealEstate" className="link">
              Real Estate
            </Link>
          </li>
          <li className="navbar-entry">
            <Link to="/EstatePlanning" className="link">
              Estate Planning
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
