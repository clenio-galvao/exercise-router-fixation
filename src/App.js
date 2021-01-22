import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.user = { 
      username: 'Joao',
      password: 123,
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning" />} />
          <Route path="/strictaccess" render={(props) => <StrictAccess {...props} user={ this.user } />} />
        </Switch>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/100">Users</Link>
        <Link to="/strictaccess">StrictAccess</Link>
      </BrowserRouter>
    );
  }
}

export default App;