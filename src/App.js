import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import { Footer, Navigation } from './layout';
import { Home } from './pages';
import { Detail, List } from './components';

const App = () => {
  return (
    <Router>
      <Navigation />
      <section className='section' style={{ flex: '1' }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:group' component={List} />
          <Route exact path='/:group/:id' component={Detail} />
          <Redirect to='/' />
        </Switch>
      </section>
      <Footer />
    </Router>
  );
};

export default App;
