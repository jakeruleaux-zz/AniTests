import React from 'react';
import { Route } from 'react-router-dom';
import LogInForm from './LogInForm';

class Home extends React.Component {
  render() {
    return(
      <div>
        <p>hi</p>
        <LogInForm home={true}{...this.props}/>
      </div>
    );
  }
}

export default Home;
