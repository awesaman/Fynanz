import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import nestedBullets from '../../utils/nestedBullets';
import Spinner from '../General/Spinner';

class Investments extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: {}, xvalues: [], yvalues: [] };
  }

  componentWillMount() {
    axios
      .get('/api/standard/Investments')
      .then(response => {
        this.setState({ data: response.data, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.stockAPI();
  }

  stockAPI() {
    const ptr = this;
    const API_KEY = '78c41dd4ecmsh627d880cd3749dfp1d1c15jsncf17081dad76';
    let ticker = 'AAPL';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&outputsize=compact&apikey=${API_KEY}`;
    let x = [];
    let y = [];

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var key in data['Time Series (Daily)']) {
          x.push(key);
          y.push(data['Time Series (Daily)'][key]['1. open']);
        }
        ptr.setState({
          xvalues: x,
          yvalues: y,
        });
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
            <p>{this.state.data.subtopics[2].par}</p>
            <ul>
              {this.state.data.subtopics[2].list.map(s => nestedBullets(s))}
            </ul>

            <Plot
              className='stock'
              data={[
                {
                  x: this.state.xvalues,
                  y: this.state.yvalues,
                  type: 'scatter',
                  mode: 'lines+markers',
                  marker: { color: 'blue' },
                },
              ]}
              layout={{ title: 'Apple' }}
            />
          </div>
        )}
      </Fragment>
    );
  }
}

export default Investments;
