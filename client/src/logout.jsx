import React, { Component } from 'react';
import { Link } from 'react-router';

class Logout extends Component {

  componentDidMount() {
    // invoke the handleLogout function passed down from home parent
    this.props.handleLogout();  
  }

  render() {
    return(
      <div>
        <h2>Logout</h2>
        <p>You are logged out</p>
      </div>
    );
  }
}

export default Logout;