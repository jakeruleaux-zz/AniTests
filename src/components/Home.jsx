import React from 'react';
import { Route } from 'react-router-dom';
import LogIn from './LogIn';
import Entered from './Entered';
import PageWrap from './PageWrap';
import styles from './../styles/Home.css';

class Home extends React.Component {
  render() {
    return(
      <div className = {styles.home}>
        <Route path='/entered' exact component={PageWrap(Entered)}></Route>
        <Route path='/' exact component={PageWrap(LogIn)}></Route>
      </div>
    );
  }
}

export default Home;
