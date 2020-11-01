import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import { Footer, Navigation } from './layout';
import { Home, AllItems, AddItem, UpdateItem, Login, SignUp } from './pages';
import { Detail, List } from './components';
import TechnologyContext from './context/technology/technologyContext';
import AuthContext from './context/auth/authContext';

const App = () => {
  const technologyContext = useContext(TechnologyContext);
  const { getAllTechnologyData } = technologyContext;

  const authContext = useContext(AuthContext);
  const { isLoggedIn } = authContext;

  useEffect(() => {
    getAllTechnologyData();
  }, [getAllTechnologyData]);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/items' component={AllItems} />
        <Route exact path='/items/new' component={AddItem} />
        <Route exact path='/items/:id' component={UpdateItem} />
        <Route exact path='/:group' component={List} />
        <Route exact path='/:group/:id' component={Detail} />
        <Redirect to='/items' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/:group' component={List} />
        <Route exact path='/:group/:id' component={Detail} />
        <Redirect to='/' />
      </Switch>
    );
  }

  return (
    <Router>
      <Navigation />
      <section className='section' style={{ flex: '1' }}>
        {routes}
      </section>
      <Footer />
    </Router>
  );
};

export default App;
