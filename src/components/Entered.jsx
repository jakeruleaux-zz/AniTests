import React from 'react';
import LogInForm from './LogInForm';
import styles from './../styles/Entered.css';

class Entered extends React.Component {
  render(){
    return (
      <div className = {styles.userinput}>
        <p>Welcome</p>
        <LogInForm entered={true} {...this.props}/>
      </div>
    )
  }
}
export default Entered;
