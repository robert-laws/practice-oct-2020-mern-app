import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import { Footer, Navigation } from './layout';
import { EquipmentList, Home } from './pages';
import { Detail } from './components';

const App = () => {
  return (
    <Router>
      <Navigation />
      <section className='section' style={{ flex: '1' }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:group' component={EquipmentList} />
          <Route exact path='/:group/:id' component={Detail} />
          <Redirect to='/' />
        </Switch>
      </section>
      <Footer />
    </Router>
  );
};

export default App;
