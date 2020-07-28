import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';

class NavbarHamburger extends Component {
  constructor(props) {
    super(props);
    this.state = { current: null };
  }

  showLinks = () => {
    var x = document.getElementsByClassName('myLinks')[0];
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  };

  render() {
    return (
      <nav className='main-navbar-hamburger'>
        <ul>
          <div className='ham'>
            <li className='navbar-entry'>
              <Link to='/' className='link'>
                <img src={Logo} alt='Home' className='logo' />
              </Link>
            </li>
            <div className='hamburger'>
              <a href='javascript:;' className='icon' onClick={this.showLinks}>
                <i className='fa fa-bars'></i>
              </a>
            </div>
          </div>
          <div className='myLinks'>
            <div className='drop'>
              <li className='navbar-entry'>
                <Link to='/savings' className='link'>
                  Savings
                </Link>
              </li>
              <div className='dropdown'>
                <Link
                  to='/savings-banking'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Banking
                </Link>
                <Link
                  to='/savings-creditcardsandloans'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Credit Cards and Loans
                </Link>
                <Link
                  to='/savings-exampledistribution'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Example Distribution
                </Link>
              </div>
            </div>
            <div className='drop'>
              <li className='navbar-entry'>
                <Link to='/investments' className='link'>
                  Investments
                </Link>
              </li>
              <div className='dropdown'>
                <Link
                  to='/investments-dividendstocks'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Dividend Stocks
                </Link>
                <Link
                  to='/investments-indexes'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Indexes
                </Link>
                <Link
                  to='/investments-bonds'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Bonds
                </Link>
                <Link
                  to='/investments-mutualfunds'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Mutual Funds
                </Link>
                <Link
                  to='/investments-options'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Options
                </Link>
                <Link
                  to='/investments-strategies'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Strategies
                </Link>
                <Link
                  to='/investments-assetallocation'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Asset Allocation
                </Link>
              </div>
            </div>
            <div className='drop'>
              <li className='navbar-entry'>
                <Link to='/insurance' className='link'>
                  Insurance
                </Link>
              </li>
              <div className='dropdown'>
                <Link
                  to='/insurance-house'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  House
                </Link>
                <Link
                  to='/insurance-life'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Life
                </Link>
                <Link
                  to='/insurance-car'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Car
                </Link>
                <Link
                  to='/insurance-health'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Health
                </Link>
              </div>
            </div>
            <div className='drop'>
              <li className='navbar-entry'>
                <Link to='/taxes' className='link'>
                  Taxes
                </Link>
              </li>
              <div className='dropdown'>
                <Link
                  to='/taxes-federalincometax'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Federal Income Tax
                </Link>
                <Link
                  to='/taxes-statetax'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  State Tax
                </Link>
                <Link
                  to='/taxes-stocktax'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Stock Tax
                </Link>
              </div>
            </div>
            <div className='drop'>
              <li className='navbar-entry'>
                <Link to='/retirement' className='link'>
                  Retirement
                </Link>
              </li>
              <div className='dropdown'>
                <Link
                  to='/retirement-incomeplanning'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Income Planning
                </Link>
                <Link
                  to='/retirement-bucketstrategy'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  The Bucket Strategy
                </Link>
              </div>
            </div>
            <div className='drop'>
              <li className='navbar-entry'>
                <Link to='/realestate' className='link'>
                  Real Estate
                </Link>
              </li>
              <div className='dropdown'>
                <Link
                  to='/realestate-buyahouse'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Buying a House
                </Link>
                <Link
                  to='/realestate-rentoutproperty'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Renting Out Property
                </Link>
              </div>
            </div>
            <div className='drop'>
              <li className='navbar-entry'>
                <Link to='#' className='link'>
                  Miscellaneous
                </Link>
              </li>
              <div className='dropdown'>
                <Link
                  to='/misc-estateplanning'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Estate Planning
                </Link>
                <Link
                  to='/misc-buyingacar'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Buying a Car
                </Link>
                <Link
                  to='/misc-employeebenefits'
                  className='dropdown-link'
                  onClick={this.showLinks}
                >
                  Employee Benefits
                </Link>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    );
  }
}

export default NavbarHamburger;
