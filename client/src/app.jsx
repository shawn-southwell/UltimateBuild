import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Home from './home.jsx';
import Signup from './signup.jsx';
import Login from './login.jsx';
import Logout from './logout.jsx';
import Dashboard from './dashboard.jsx';
import ConfigForm from './configForm.jsx';
import ConfigDetail from './configDetail.jsx';


class App extends Component {
  
  render() {
    // App just defines the routes
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/dashboard" component={Dashboard}>
            <Route path="/dashboard/configForm" component={ConfigForm}/>
            <Route path="/dashboard/configDetail/:id" component={ConfigDetail}/>
          </Route>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));