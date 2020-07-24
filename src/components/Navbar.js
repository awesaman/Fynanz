import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.svg';

class Navbar extends Component {
  render() {
    return (
      <nav className='main-navbar'>
        <ul>
          <li className='navbar-entry'>
            <Link to='/' className='link'>
              <img src={Logo} alt='Home' className='logo' />
            </Link>
          </li>
          <div className='drop'>
            <li className='navbar-entry'>
              <Link to='/savings' className='link'>
                Savings
              </Link>
            </li>
            <div className='dropdown'>
              <Link to='/savings-banking' className='dropdown-link'>
                Banking
              </Link>
              <Link to='/savings-creditcardsandloans' className='dropdown-link'>
                Credit Cards and Loans
              </Link>
              <Link to='/savings-exampledistribution' className='dropdown-link'>
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
              <Link to='/investments-dividendstocks' className='dropdown-link'>
                Dividend Stocks
              </Link>
              <Link to='/investments-indexes' className='dropdown-link'>
                Indexes
              </Link>
              <Link to='/investments-bonds' className='dropdown-link'>
                Bonds
              </Link>
              <Link to='/investments-mutualfunds' className='dropdown-link'>
                Mutual Funds
              </Link>
              <Link to='/investments-options' className='dropdown-link'>
                Options
              </Link>
              <Link to='/investments-strategies' className='dropdown-link'>
                Strategies
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
              <Link to='/insurance-house' className='dropdown-link'>
                House
              </Link>
              <Link to='/insurance-life' className='dropdown-link'>
                Life
              </Link>
              <Link to='/insurance-car' className='dropdown-link'>
                Car
              </Link>
              <Link to='/insurance-health' className='dropdown-link'>
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
              <Link to='/taxes-federalincometax' className='dropdown-link'>
                Federal Income Tax
              </Link>
              <Link to='/taxes-statetax' className='dropdown-link'>
                State Tax
              </Link>
              <Link to='/taxes-stocktax' className='dropdown-link'>
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
              <Link to='/retirement-incomeplanning' className='dropdown-link'>
                Income Planning
              </Link>
              <Link to='/retirement-bucketstrategy' className='dropdown-link'>
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
              <Link to='/realestate-buyahouse' className='dropdown-link'>
                Buying a House
              </Link>
              <Link to='/realestate-rentoutproperty' className='dropdown-link'>
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
            <div className='dropdown'></div>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
