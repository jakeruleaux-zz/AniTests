import React from 'react';
import Home from './Home';



  const LogInForm = ({home, history}) => {
  if(!home) {
    return(
      <div className="form">
        <input type="text" placeholder="log in"/>
        <button onClick={() =>history.push('/home')}>enter</button>
      </div>
    )
  } else {
    return (
      <div className="form">
        <button onClick={() => history.push('/')}> Try </button>
      </div>
    )
  }
}

export default LogInForm;
