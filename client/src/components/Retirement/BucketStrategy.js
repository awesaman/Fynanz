import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Spinner from '../General/Spinner';
import bucketStrategy from '../../images/BucketStrategy.jpg';

class BucketStrategy extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: {} };
  }

  componentWillMount() {
    axios
      .get('/api/standard/The%20Bucket%20Strategy')
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
            <p>{this.state.data.intro}</p>
            <img src={bucketStrategy} alt='Loading...' className='image' />
            <p>{this.state.data.subtopics[0].par}</p>
          </div>
        )}
      </Fragment>
    );
  }
}

export default BucketStrategy;
