  
import React from 'react';
import { Route } from 'react-router-dom';
import { LoginPage } from './Components/LoginPage';
import { LandingPage } from './Components/LandingPage';

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <h1>
        Midas
      </h1>
      <Route path ="/login" component={ LoginPage }/>
      <Route path = "/landingpage" component={ LandingPage } />
    </div>
  )
}

export default App;