import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Savings from "./components/Savings";
import Banking from "./components/Savings-Banking";
import CreditCardsAndLoans from "./components/Savings-CreditCardsAndLoans";
import ExampleDistribution from "./components/Savings-ExampleDistribution";
import Investments from "./components/Investments";
import Insurance from "./components/Insurance";
import Taxes from "./components/Taxes";
import Retirement from "./components/Retirement";
import RealEstate from "./components/RealEstate";
import EstatePlanning from "./components/EstatePlanning";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/Savings" component={Savings} />
        <Route path="/Savings-Banking" component={Banking} />
        <Route
          path="/Savings-CreditCardsAndLoans"
          component={CreditCardsAndLoans}
        />
        <Route
          path="/Savings-ExampleDistribution"
          component={ExampleDistribution}
        />
        <Route path="/Investments" component={Investments} />
        <Route path="/Insurance" component={Insurance} />
        <Route path="/Taxes" component={Taxes} />
        <Route path="/Retirement" component={Retirement} />
        <Route path="/RealEstate" component={RealEstate} />
        <Route path="/EstatePlanning" component={EstatePlanning} />
      </div>
    </Router>
  );
}

export default App;
