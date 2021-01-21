import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning" />} />
        </Switch>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/users/1">Users</a>
        
      </BrowserRouter>
    );
  }
}

export default App;