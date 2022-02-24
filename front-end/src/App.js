import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home/index';
import Products from './pages/customer/index';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/customer/products" component={ Products } />
    </Switch>
  );
}

export default App;
