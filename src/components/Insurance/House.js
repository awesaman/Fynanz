import React, { Component, Fragment } from 'react';
import axios from 'axios';
import nestedBullets from '../../utils/nestedBullets';
import Spinner from '../General/Spinner';

class House extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: {} };
  }

  componentWillMount() {
    axios
      .get('/api/standard/House%20Insurance')
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
            <ul>
              {this.state.data.subtopics[0].list.map(s => nestedBullets(s))}
            </ul>
          </div>
        )}
      </Fragment>
    );
  }
}

export default House;
