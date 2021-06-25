import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import GlobalLoading from './components/GlobalLoading';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import DetailPage from './components/DetailPage';
import AuthRoute from './components/Router/AuthRoute/AuthRoute';
import PrivateRoute from './components/Router/PrivateRoute/PrivateRoute';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
    <GlobalLoading/>
    <Router className="App">
      <Switch>
        <AuthRoute 
          path='/login' 
          component={LoginPage}
          />
        <PrivateRoute 
          exact path='/'
          component={HomePage}
          />
        <PrivateRoute 
          path='/cart' 
          component={CartPage}
          />
        <PrivateRoute
          path='/details/:idDrink'
          component={DetailPage}
          />
        <Route component={PageNotFound}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
