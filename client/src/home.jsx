import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {

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