import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { current: null };
  }

  handleNull = () => this.setState({ current: null });
  handleSavings = () => this.setState({ current: 'Savings' });
  handleInvestments = () => this.setState({ current: 'Investments' });
  handleTaxes = () => this.setState({ current: 'Taxes' });
  handleRealEstate = () => this.setState({ current: 'RealEstate' });
  handleInsurance = () => this.setState({ current: 'Insurance' });
  handleRetirement = () => this.setState({ current: 'Retirement' });
  handleMiscellaneous = () => this.setState({ current: 'Miscellaneous' });

  render() {
    return (
      <nav className='main-navbar'>
        <ul>
          <li className='navbar-entry'>
            <Link to='/' className='link' onClick={this.handleNull}>
              <img src={Logo} alt='Home' className='logo' />
            </Link>
          </li>
          <div className='drop'>
            <li className='navbar-entry'>
              <Link
                to='/savings'
                className={
                  this.state.current === 'Savings' ? 'underlined-link' : 'link'
                }
                onClick={this.handleSavings}
              >
                Savings
              </Link>
            </li>
            <div className='dropdown'>
              <Link
                to='/savings-banking'
                className='dropdown-link'
                onClick={this.handleSavings}
              >
                Banking
              </Link>
              <Link
                to='/savings-creditcardsandloans'
                className='dropdown-link'
                onClick={this.handleSavings}
              >
                Credit Cards and Loans
              </Link>
              <Link
                to='/savings-exampledistribution'
                className='dropdown-link'
                onClick={this.handleSavings}
              >
                Example Distribution
              </Link>
            </div>
          </div>
          <div className='drop'>
            <li className='navbar-entry'>
              <Link
                to='/investments'
                className={
                  this.state.current === 'Investments'
                    ? 'underlined-link'
                    : 'link'
                }
                onClick={this.handleInvestments}
              >
                Investments
              </Link>
            </li>
            <div className='dropdown'>
              <Link
                to='/investments-dividendstocks'
                className='dropdown-link'
                onClick={this.handleInvestments}
              >
                Dividend Stocks
              </Link>
              <Link
                to='/investments-indexes'
                className='dropdown-link'
                onClick={this.handleInvestments}
              >
                Indexes
              </Link>
              <Link
                to='/investments-bonds'
                className='dropdown-link'
                onClick={this.handleInvestments}
              >
                Bonds
              </Link>
              <Link
                to='/investments-mutualfunds'
                className='dropdown-link'
                onClick={this.handleInvestments}
              >
                Mutual Funds
              </Link>
              <Link
                to='/investments-options'
                className='dropdown-link'
                onClick={this.handleInvestments}
              >
                Options
              </Link>
              <Link
                to='/investments-strategies'
                className='dropdown-link'
                onClick={this.handleInvestments}
              >
                Strategies
              </Link>
              <Link
                to='/investments-assetallocation'
                className='dropdown-link'
                onClick={this.handleInvestments}
              >
                Asset Allocation
              </Link>
            </div>
          </div>
          <div className='drop'>
            <li className='navbar-entry'>
              <Link
                to='/insurance'
                className={
                  this.state.current === 'Insurance'
                    ? 'underlined-link'
                    : 'link'
                }
                onClick={this.handleInsurance}
              >
                Insurance
              </Link>
            </li>
            <div className='dropdown'>
              <Link
                to='/insurance-house'
                className='dropdown-link'
                onClick={this.handleInsurance}
              >
                House
              </Link>
              <Link
                to='/insurance-life'
                className='dropdown-link'
                onClick={this.handleInsurance}
              >
                Life
              </Link>
              <Link
                to='/insurance-car'
                className='dropdown-link'
                onClick={this.handleInsurance}
              >
                Car
              </Link>
              <Link
                to='/insurance-health'
                className='dropdown-link'
                onClick={this.handleInsurance}
              >
                Health
              </Link>
            </div>
          </div>
          <div className='drop'>
            <li className='navbar-entry'>
              <Link
                to='/taxes'
                className={
                  this.state.current === 'Taxes' ? 'underlined-link' : 'link'
                }
                onClick={this.handleTaxes}
              >
                Taxes
              </Link>
            </li>
            <div className='dropdown'>
              <Link
                to='/taxes-federalincometax'
                className='dropdown-link'
                onClick={this.handleTaxes}
              >
                Federal Income Tax
              </Link>
              <Link
                to='/taxes-statetax'
                className='dropdown-link'
                onClick={this.handleTaxes}
              >
                State Tax
              </Link>
              <Link
                to='/taxes-stocktax'
                className='dropdown-link'
                onClick={this.handleTaxes}
              >
                Stock Tax
              </Link>
            </div>
          </div>
          <div className='drop'>
            <li className='navbar-entry'>
              <Link
                to='/retirement'
                className={
                  this.state.current === 'Retirement'
                    ? 'underlined-link'
                    : 'link'
                }
                onClick={this.handleRetirement}
              >
                Retirement
              </Link>
            </li>
            <div className='dropdown'>
              <Link
                to='/retirement-incomeplanning'
                className='dropdown-link'
                onClick={this.handleRetirement}
              >
                Income Planning
              </Link>
              <Link
                to='/retirement-bucketstrategy'
                className='dropdown-link'
                onClick={this.handleRetirement}
              >
                The Bucket Strategy
              </Link>
            </div>
          </div>
          <div className='drop'>
            <li className='navbar-entry'>
              <Link
                to='/realestate'
                className={
                  this.state.current === 'RealEstate'
                    ? 'underlined-link'
                    : 'link'
                }
                onClick={this.handleRealEstate}
              >
                Real Estate
              </Link>
            </li>
            <div className='dropdown'>
              <Link
                to='/realestate-buyahouse'
                className='dropdown-link'
                onClick={this.handleRealEstate}
              >
                Buying a House
              </Link>
              <Link
                to='/realestate-rentoutproperty'
                className='dropdown-link'
                onClick={this.handleRealEstate}
              >
                Renting Out Property
              </Link>
            </div>
          </div>
          <div className='drop'>
            <li className='navbar-entry'>
              <Link
                to='#'
                className={
                  this.state.current === 'Miscellaneous'
                    ? 'underlined-link'
                    : 'link'
                }
              >
                Miscellaneous
              </Link>
            </li>
            <div className='dropdown'>
              <Link
                to='/misc-estateplanning'
                className='dropdown-link'
                onClick={this.handleMiscellaneous}
              >
                Estate Planning
              </Link>
              <Link
                to='/misc-buyingacar'
                className='dropdown-link'
                onClick={this.handleMiscellaneous}
              >
                Buying a Car
              </Link>
              <Link
                to='/misc-employeebenefits'
                className='dropdown-link'
                onClick={this.handleMiscellaneous}
              >
                Employee Benefits
              </Link>
            </div>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
