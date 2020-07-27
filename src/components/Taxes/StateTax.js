import React, { Component, Fragment } from 'react';
import axios from 'axios';
import nestedBullets from '../../utils/nestedBullets';
import Spinner from '../General/Spinner';

class StateTax extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: {} };
  }

  componentWillMount() {
    axios
      .get('http://localhost:5000/api/standard/State%20Tax')
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
            <ol>
              {this.state.data.subtopics[0].list.map(s => nestedBullets(s))}
            </ol>
            <h3>{this.state.data.subtopics[1].subheading}</h3>
            <p>{this.state.data.subtopics[1].par}</p>
            <ul>
              {this.state.data.subtopics[1].list.map(s => nestedBullets(s))}
            </ul>
            <p>{this.state.data.subtopics[2].par}</p>
            <ul>
              {this.state.data.subtopics[2].list.map(s => nestedBullets(s))}
            </ul>
            <p>{this.state.data.subtopics[3].par}</p>
            <ul>
              {this.state.data.subtopics[3].list.map(s => nestedBullets(s))}
            </ul>
            <p>{this.state.data.subtopics[4].par}</p>
            <ul>
              {this.state.data.subtopics[4].list.map(s => nestedBullets(s))}
            </ul>
            <p>{this.state.data.subtopics[5].par}</p>
            <ul>
              {this.state.data.subtopics[5].list.map(s => nestedBullets(s))}
            </ul>
            <p>{this.state.data.subtopics[6].par}</p>
            <ul>
              {this.state.data.subtopics[6].list.map(s => nestedBullets(s))}
            </ul>
          </div>
        )}
      </Fragment>
    );
  }
}

export default StateTax;
