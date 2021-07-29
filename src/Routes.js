import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ContactM from './pages/ContactM';
import Material from './pages/Material';
import Login from './pages/Login';
import Register from './pages/Registration';
import Chat from './pages/Chat';

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/contactm' component={ContactM} />
      <Route exact path='/m' component={Material} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/Register' component={Register} />
      <Route exact path='/Chat' component={Chat} />
      <Route
        render={function () {
          return <h1>Not Found</h1>;
        }}
      />
    </Switch>
  );

}

export default Routes;
