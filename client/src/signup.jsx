import React, { Component } from 'react';
import { Link } from 'react-router';

class Signup extends Component {
  render() {
    return(
      <div>
        <h2>Signup</h2>
        <form className="signupForm" onSubmit={this.props.handleFormSubmit}>
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" value="submit" />
        </form>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Signup;