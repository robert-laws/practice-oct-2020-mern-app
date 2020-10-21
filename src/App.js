import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import { Footer, Navigation } from './layout';
import { EquipmentList, EquipmentDetail, Home } from './pages';

const App = () => {
  return (
    <Router>
      <Navigation />
      <section className='section' style={{ flex: '1' }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/equipment' component={EquipmentList} />
          <Route exact path='/equipment/:id' component={EquipmentDetail} />
          <Redirect to='/' />
        </Switch>
      </section>
      <Footer />
    </Router>
  );
};

export default App;
