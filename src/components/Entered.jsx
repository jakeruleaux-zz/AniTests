import React from 'react';
import LogInForm from './LogInForm';

class Entered extends React.Component {
  render(){
    return (
      <div>
      entered
      <LogInForm entered={true} {...this.props}/>
      </div>
    )
  }
}
export default Entered;
