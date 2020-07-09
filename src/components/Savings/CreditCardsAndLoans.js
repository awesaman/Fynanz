import React, { Component } from "react";

class CreditCardsAndLoans extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>Credit Cards and Loans</h1>
        <h3>Credit vs. Debit</h3>
        <table>
          <tr>
            <th>Credit</th>
            <th>Debit</th>
          </tr>
          <tr>
            <td>
              <ul>
                <li>Based on Credit History</li>
                <li>
                  Build Credit History by
                  <ul>
                    <li>paying credit card bills on time</li>
                    <li>taking loans and paying them off on time</li>
                  </ul>
                </li>
                <li>
                  You have a Credit Limit (how much you can spend in a month)
                  that increases over time if your credit score is good.
                  <ul>
                    <li>
                      There is a fee if you spend more than your Credit Limit
                      allows.
                    </li>
                  </ul>
                </li>
                <li>
                  Build your credit as early as you can (get a credit card ASAP)
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Linked to your bank checking account</li>
                <li>
                  Once your checking account reaches $0, your debit card won't
                  work.
                  <ul>
                    <li>
                      Some banks will let you go past $0 but then you have to
                      pay an overdraft fee, which is money not worth losing.
                    </li>
                    <li>
                      Some accounts don't come with overdraft, but just try to
                      avoid this situation in general
                    </li>
                  </ul>
                </li>
                <li>Leave debit cards as soon as you can.</li>
              </ul>
            </td>
          </tr>
        </table>
        <h3>How Loans Affect Credit</h3>
        <table>
          <tr>
            <th>Good Loans for Credit</th>
            <th>Bad Loans for Credit</th>
          </tr>
          <tr>
            <td>
              <ul>
                <li>
                  Mortgage (House Loan) - interest ≈ 4%
                  <ul>
                    <li>Best because you can deduct it from your taxes</li>
                    <li>
                      But it's still good to pay it off as soon as you can.
                    </li>
                  </ul>
                </li>
                <li>
                  Car Loan - interest ≈ 4%
                  <ul>
                    <li>Try to pay in full or get a 0% loan deal</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  Credit Card Debt - interest ≈ 18%
                  <ul>
                    <li>
                      This can be avoided entirely by paying your bills on time
                      and not going over your credit limit.
                    </li>
                  </ul>
                </li>
                <li>
                  Personal Loans
                  <ul>
                    <li>You don't want to owe anyone.</li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default CreditCardsAndLoans;
