import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Savings from './components/Savings/Savings';
import Banking from './components/Savings/Banking';
import CreditCardsAndLoans from './components/Savings/CreditCardsAndLoans';
import ExampleDistribution from './components/Savings/ExampleDistribution';
import Investments from './components/Investments/Investments';
import DividendStocks from './components/Investments/DividendStocks';
import Indexes from './components/Investments/Indexes';
import Bonds from './components/Investments/Bonds';
import MutualFunds from './components/Investments/MutualFunds';
import Options from './components/Investments/Options';
import Strategies from './components/Investments/Strategies';
import Insurance from './components/Insurance/Insurance';
import House from './components/Insurance/House';
import Life from './components/Insurance/Life';
import Car from './components/Insurance/Car';
import Health from './components/Insurance/Health';
import Taxes from './components/Taxes/Taxes';
import FederalIncomeTax from './components/Taxes/FederalIncomeTax';
import StateTax from './components/Taxes/StateTax';
import StockTax from './components/Taxes/StockTax';
import Retirement from './components/Retirement/Retirement';
import BucketStrategy from './components/Retirement/BucketStrategy';
import IncomePlanning from './components/Retirement/IncomePlanning';
import RealEstate from './components/RealEstate/RealEstate';
import RentAnApartment from './components/RealEstate/RentAnApartment.js';
import BuyAHouse from './components/RealEstate/BuyAHouse';
import RentOutProperty from './components/RealEstate/RentOutProperty';
import EstatePlanning from './components/EstatePlanning/EstatePlanning';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path='/savings' component={Savings} />
        <Route path='/savings-banking' component={Banking} />
        <Route
          path='/savings-creditcardsandloans'
          component={CreditCardsAndLoans}
        />
        <Route
          path='/savings-exampledistribution'
          component={ExampleDistribution}
        />
        <Route path='/investments' component={Investments} />
        <Route path='/investments-dividendstocks' component={DividendStocks} />
        <Route path='/investments-indexes' component={Indexes} />
        <Route path='/investments-bonds' component={Bonds} />
        <Route path='/investments-mutualfunds' component={MutualFunds} />
        <Route path='/investments-options' component={Options} />
        <Route path='/investments-strategies' component={Strategies} />
        <Route path='/insurance' component={Insurance} />
        <Route path='/insurance-house' component={House} />
        <Route path='/insurance-life' component={Life} />
        <Route path='/insurance-car' component={Car} />
        <Route path='/insurance-health' component={Health} />
        <Route path='/taxes' component={Taxes} />
        <Route path='/taxes-federalincometax' component={FederalIncomeTax} />
        <Route path='/taxes-statetax' component={StateTax} />
        <Route path='/taxes-stocktax' component={StockTax} />
        <Route path='/retirement' component={Retirement} />
        <Route path='/retirement-bucketstrategy' component={BucketStrategy} />
        <Route path='/retirement-incomeplanning' component={IncomePlanning} />
        <Route path='/realestate' component={RealEstate} />
        <Route path='/realestate-rentanapartment' component={RentAnApartment} />
        <Route path='/realestate-buyahouse' component={BuyAHouse} />
        <Route path='/realestate-rentoutproperty' component={RentOutProperty} />
        <Route path='/estateplanning' component={EstatePlanning} />
      </div>
    </Router>
  );
}

export default App;
