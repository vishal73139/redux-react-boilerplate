import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';


const Navigation = () => (
  <Router>
    <Switch> 
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Home} /> 
    </Switch>
  </Router>
)

export default Navigation;