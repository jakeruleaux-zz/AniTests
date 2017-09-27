import React from 'react';




  const LogInForm = ({entered, history}) => {
  if(!entered) {
    return(
      <div className="form">
        <input type="text" placeholder="log in"/>
        <button onClick={() =>history.push('/entered')}>enter</button>
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
