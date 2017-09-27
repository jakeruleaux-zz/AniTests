import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import LogInForm from './LogInForm';



function App() {
  return (
    <div>
      <Route path='/' exact component={Home}></Route>
      <Route path='/LogIn' exact component={LogInForm}></Route>
      <h2>App!</h2>
    </div>
  );
}
export default App;
