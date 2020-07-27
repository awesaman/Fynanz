import ExampleDist from '../../images/ExampleDist.jpg';
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Spinner from '../General/Spinner';

class ExampleDistribution extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: {} };
  }

  componentWillMount() {
    axios
      .get('http://localhost:5000/api/standard/Example%20Distribution')
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
            <img
              src={ExampleDist}
              className='image'
              alt='Example Distribution at 120k Salary'
            />
          </div>
        )}
      </Fragment>
    );
  }
}

export default ExampleDistribution;
