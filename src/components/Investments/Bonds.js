import BondMatrix from '../../images/BondMatrix.jpg';
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import nestedBullets from '../../utils/nestedBullets';
import Spinner from '../Spinner';

class Bonds extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: {} };
  }

  componentWillMount() {
    axios
      .get('http://localhost:5000/api/standard/Bonds')
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
            <ol>
              {this.state.data.subtopics[0].list.map(s => nestedBullets(s))}
            </ol>
            <h3>{this.state.data.subtopics[1].subheading}</h3>
            <p>{this.state.data.subtopics[1].par}</p>
            <ul>
              {this.state.data.subtopics[1].list.map(s => nestedBullets(s))}
            </ul>
            <h3>{this.state.data.subtopics[2].subheading}</h3>
            <p>{this.state.data.subtopics[2].par}</p>
            <ul>
              {this.state.data.subtopics[2].list.map(s => nestedBullets(s))}
            </ul>
            <h3>{this.state.data.subtopics[3].subheading}</h3>
            <ul>
              {this.state.data.subtopics[3].list.map(s => nestedBullets(s))}
            </ul>
            <h3>{this.state.data.subtopics[4].subheading}</h3>
            <img src={BondMatrix} className='image' alt='Loading...' />
          </div>
        )}
      </Fragment>
    );
  }
}

export default Bonds;
