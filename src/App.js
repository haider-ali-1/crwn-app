import React from 'react';
import './App.css';

import { Link, Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.component.scss';

const HatsPage = (props) => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
