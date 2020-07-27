import React, { Component, Fragment } from 'react';
import landing from '../images/Landing.jpg';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <img src={landing} alt='Loading...' className='image trans'></img>
        <div className='centered'>
          <h1 className='big'>Fynanz</h1>
          <h3>Learn everything you need to know about personal finance.</h3>
        </div>
      </Fragment>
    );
  }
}

export default Landing;
