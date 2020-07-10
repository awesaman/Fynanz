import React, { Component } from "react";
import data from "../../data/Savings/CreditCardsAndLoans.json";
import nestedBullets from "../../utils/nestedBullets";

class CreditCardsAndLoans extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <h1>{data.header}</h1>
        <h3>{data.subtopics[0].subheading}</h3>
        <table>
          <tr>
            <th>{data.subtopics[0].table.topleft}</th>
            <th>{data.subtopics[0].table.topright}</th>
          </tr>
          <tr>
            <td>
              <ul>
                {data.subtopics[0].table.bottomleft.map((s) =>
                  nestedBullets(s)
                )}
              </ul>
            </td>
            <td>
              <ul>
                {data.subtopics[0].table.bottomright.map((s) =>
                  nestedBullets(s)
                )}
              </ul>
            </td>
          </tr>
        </table>
        <h3>{data.subtopics[1].subheading}</h3>
        <table>
          <tr>
            <th>{data.subtopics[1].table.topleft}</th>
            <th>{data.subtopics[1].table.topright}</th>
          </tr>
          <tr>
            <td>
              <ul>
                {data.subtopics[1].table.bottomleft.map((s) =>
                  nestedBullets(s)
                )}
              </ul>
            </td>
            <td>
              <ul>
                {data.subtopics[1].table.bottomright.map((s) =>
                  nestedBullets(s)
                )}
              </ul>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default CreditCardsAndLoans;
