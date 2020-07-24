import React, { Component, Fragment } from 'react';
import axios from 'axios';
import TaxTable from '../../images/TaxTable.png';
import TaxBrackets from '../../images/TaxBrackets.png';
import nestedBullets from '../../utils/nestedBullets';
import Spinner from '../Spinner';

class FederalIncomeTax extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: {} };
  }

  componentWillMount() {
    axios
      .get('http://localhost:5000/api/standard/Federal%20Income%20Tax')
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
            <p>{this.state.data.subtopics[0].par}</p>
            <img src={TaxBrackets} className='image' alt='Loading...' />
            <h3>{this.state.data.subtopics[1].subheading}</h3>
            <ul>
              {this.state.data.subtopics[1].list.map(s => nestedBullets(s))}
            </ul>
            <p>{this.state.data.subtopics[1].par}</p>
            <img
              src={TaxTable}
              className='image-handwritten'
              alt='Loading...'
            />
            <p>{this.state.data.subtopics[2].par}</p>
          </div>
        )}
      </Fragment>
    );
  }
}

export default FederalIncomeTax;
