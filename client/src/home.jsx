import React, { Component } from 'react';
import { Link } from 'react-router';
import Cookie from 'react-cookie';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log('ssid', Cookie.load('ssid'));
    this.state = { ssid: Cookie.load('ssid') };
  }

  componentDidMount() {
    if(! this.state.ssid) { // no active user
      // redirect to /login
      this.props.history.push('/login');
    } else { // active user
      // redirect to /dashboard
      this.props.history.push('/dashboard');
    }
  }

  render() {
    // Note: {this.props.children} is a placeholder container, similar to ng-view, for displaying the content of different children routes
    return(
      <div>
        <h2>Home</h2>
        <ul>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
         {this.props.children}
      </div>
    );
  }
}

export default Home;