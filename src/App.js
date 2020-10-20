import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import { Navigation } from './layout';
import { Equipment, Home } from './pages';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/equipment' component={Equipment} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
