import React, { Component, Fragment } from 'react';
import axios from 'axios';
import nestedBullets from '../../utils/nestedBullets';
import Spinner from '../General/Spinner';

class BuyAHouse extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: {} };
  }

  componentWillMount() {
    axios
      .get('/api/standard/Buying%20a%20House')
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
            <ul>
              {this.state.data.subtopics[0].list.map(s => nestedBullets(s))}
            </ul>
            <h3>{this.state.data.subtopics[1].subheading}</h3>
            <ol>
              {this.state.data.subtopics[1].list.map(s => nestedBullets(s))}
            </ol>
            <p>{this.state.data.subtopics[1].par}</p>
            <h3>{this.state.data.subtopics[2].subheading}</h3>
            <ul>
              {this.state.data.subtopics[2].list.map(s => nestedBullets(s))}
            </ul>
            <h3>{this.state.data.subtopics[3].subheading}</h3>
            <ul>
              {this.state.data.subtopics[3].list.map(s => nestedBullets(s))}
            </ul>
          </div>
        )}
      </Fragment>
    );
  }
}

export default BuyAHouse;
