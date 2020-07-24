import PUTvsCALL from '../../images/PUTvsCALL.jpg';
import SellCallAndPut from '../../images/SellCallAndPut.jpg';
import SellPutSellCall from '../../images/SellPutSellCall.jpg';
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import nestedBullets from '../../utils/nestedBullets';
import Spinner from '../Spinner';

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: {} };
  }

  componentWillMount() {
    axios
      .get('http://localhost:5000/api/standard/Options')
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
            <ul>
              {this.state.data.subtopics[0].list.map(s => nestedBullets(s))}
            </ul>
            <h3>{this.state.data.subtopics[1].subheading}</h3>
            <ul>
              {this.state.data.subtopics[1].list.map(s => nestedBullets(s))}
            </ul>
            <h3>{this.state.data.subtopics[2].subheading}</h3>
            <ul>
              {this.state.data.subtopics[2].list.map(s => nestedBullets(s))}
            </ul>
            <img src={PUTvsCALL} className='image' alt='Loading...' />
            <h3>{this.state.data.subtopics[3].subheading}</h3>
            <ul>
              {this.state.data.subtopics[3].list.map(s => nestedBullets(s))}
            </ul>
            <img src={SellCallAndPut} className='image' alt='Loading...' />
            <img src={SellPutSellCall} className='image' alt='Loading...' />
            <h3>{this.state.data.subtopics[4].subheading}</h3>
            <ul>
              {this.state.data.subtopics[4].list.map(s => nestedBullets(s))}
            </ul>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Options;
