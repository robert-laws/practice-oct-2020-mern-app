import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import { Footer, Navigation } from './layout';
import { Home, AddItem, UpdateItem } from './pages';
import { Detail, List } from './components';
import TechnologyContext from './context/technology/technologyContext';

const App = () => {
  const technologyContext = useContext(TechnologyContext);
  const { getAllTechnologyData } = technologyContext;

  useEffect(() => {
    getAllTechnologyData();
  }, [getAllTechnologyData]);

  return (
    <Router>
      <Navigation />
      <section className='section' style={{ flex: '1' }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/items/new' component={AddItem} />
          <Route exact path='/items/:id' component={UpdateItem} />
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
