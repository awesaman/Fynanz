import React, { Component, Fragment } from 'react';
import axios from 'axios';
import nestedBullets from '../../utils/nestedBullets';
import Spinner from '../Spinner';

class CreditCardsAndLoans extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: {} };
  }

  componentWillMount() {
    axios
      .get('http://localhost:5000/api/table/Credit%20Cards%20and%20Loans')
      .then(response => {
        this.setState({ data: response.data, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Fragment>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className='main-body'>
            <h1>{this.state.data.header}</h1>
            <h3>{this.state.data.subtopics[0].subheading}</h3>
            <table>
              <tr>
                <th>{this.state.data.subtopics[0].table.topleft}</th>
                <th>{this.state.data.subtopics[0].table.topright}</th>
              </tr>
              <tr>
                <td>
                  <ul>
                    {this.state.data.subtopics[0].table.bottomleft.map(s =>
                      nestedBullets(s)
                    )}
                  </ul>
                </td>
                <td>
                  <ul>
                    {this.state.data.subtopics[0].table.bottomright.map(s =>
                      nestedBullets(s)
                    )}
                  </ul>
                </td>
              </tr>
            </table>
            <h3>{this.state.data.subtopics[1].subheading}</h3>
            <table>
              <tr>
                <th>{this.state.data.subtopics[1].table.topleft}</th>
                <th>{this.state.data.subtopics[1].table.topright}</th>
              </tr>
              <tr>
                <td>
                  <ul>
                    {this.state.data.subtopics[1].table.bottomleft.map(s =>
                      nestedBullets(s)
                    )}
                  </ul>
                </td>
                <td>
                  <ul>
                    {this.state.data.subtopics[1].table.bottomright.map(s =>
                      nestedBullets(s)
                    )}
                  </ul>
                </td>
              </tr>
            </table>
          </div>
        )}
      </Fragment>
    );
  }
}

export default CreditCardsAndLoans;
