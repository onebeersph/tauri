import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
