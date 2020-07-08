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
          <div className="drop">
            <li className="navbar-entry">
              <Link to="/savings" className="link">
                Savings
              </Link>
            </li>
            <div className="dropdown">
              <Link to="/savings-banking" className="dropdown-link">
                Banking
              </Link>
              <Link to="/savings-creditcardsandloans" className="dropdown-link">
                Credit Cards and Loans
              </Link>
              <Link to="/savings-exampledistribution" className="dropdown-link">
                Example Distribution
              </Link>
            </div>
          </div>
          <div className="drop">
            <li className="navbar-entry">
              <Link to="/investments" className="link">
                Investments
              </Link>
            </li>
            <div className="dropdown">
              <Link to="/investments-indexes" className="dropdown-link">
                Indexes
              </Link>
              <Link to="/investments-bonds" className="dropdown-link">
                Bonds
              </Link>
              <Link to="/investments-mutualfunds" className="dropdown-link">
                Mutual Funds
              </Link>
              <Link to="/investments-options" className="dropdown-link">
                Options
              </Link>
              <Link to="/investments-strategies" className="dropdown-link">
                Strategies
              </Link>
            </div>
          </div>
          <div className="drop">
            <li className="navbar-entry">
              <Link to="/insurance" className="link">
                Insurance
              </Link>
            </li>
            <div className="dropdown">
              <Link to="/insurance-house" className="dropdown-link">
                House
              </Link>
              <Link to="/insurance-life" className="dropdown-link">
                Life
              </Link>
              <Link to="/insurance-car" className="dropdown-link">
                Car
              </Link>
              <Link to="/insurance-health" className="dropdown-link">
                Health
              </Link>
            </div>
          </div>
          <div className="drop">
            <li className="navbar-entry">
              <Link to="/taxes" className="link">
                Taxes
              </Link>
            </li>
            <div className="dropdown">
              <Link to="/taxes-federalincometax" className="dropdown-link">
                Federal Income Tax
              </Link>
              <Link to="/taxes-statetax" className="dropdown-link">
                State Tax
              </Link>
              <Link to="/taxes-stocktax" className="dropdown-link">
                Stock Tax
              </Link>
            </div>
          </div>
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
