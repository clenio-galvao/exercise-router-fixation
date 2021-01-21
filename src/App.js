import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users}/>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/users">Users</a>
      </BrowserRouter>
    );
  }
}

export default App;