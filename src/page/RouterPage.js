import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import User from './User';
import Home from './Home';
import EmptyPage from './EmptyPage'

class RouterPage extends Component {
  render() {
    return (
      <Router>
      <div>
        <p>RouterPage</p>
        
          <Link to='/'>Home</Link> |
          <Link to='/user'>User</Link>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/user' component={User} />
            <Route component={EmptyPage} />
          </Switch>
          </div>
        </Router>
      
    );
  }
}

export default RouterPage;