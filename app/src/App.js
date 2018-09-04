import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import Index from './pages/Index';
import Members from './pages/Members';
import User from './pages/User';
import Header from './components/Header';

const App = () => <div className="App full-height">
  <Header />
  <Switch>
    <Route exact path='/' component={Index} />
    <Route path='/members' component={Members} />
    <Route path='/user' component={User} />
  </Switch>
</div>;

export default App;