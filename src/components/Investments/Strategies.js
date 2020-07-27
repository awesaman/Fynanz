import Spreads from '../../images/Spreads.jpg';
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Spinner from '../General/Spinner';

class Strategies extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: {} };
  }

  componentWillMount() {
    axios
      .get('/api/standard/Strategies')
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
            <img src={Spreads} className='image-handwritten' alt='Loading...' />
          </div>
        )}
      </Fragment>
    );
  }
}

export default Strategies;
