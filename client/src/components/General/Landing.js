import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import landing from '../../images/Landing.jpg';

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
          <br />
          <p>
            The primary topics covered are{' '}
            <strong>
              <Link className='decor' to='/savings'>
                Savings
              </Link>
              ,{' '}
              <Link className='decor' to='/investments'>
                Investments
              </Link>
              ,{' '}
              <Link className='decor' to='/insurance'>
                Insurance
              </Link>
              ,{' '}
              <Link className='decor' to='/taxes'>
                Taxes
              </Link>
              ,{' '}
              <Link className='decor' to='/retirement'>
                Retirement
              </Link>
              , and{' '}
              <Link className='decor' to='/realestate'>
                Real Estate
              </Link>
            </strong>
          </p>
          <p>
            Click any of the links above to start learning! The material is
            structured in an ordered fashion such that you always know what you
            should try learning about next. Feel free to skip around, but make
            sure you are comfortable with a subject before moving on to the
            next.
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Landing;
