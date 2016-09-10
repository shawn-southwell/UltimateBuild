import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
  render() {
    return(
      <div>
        <h2>Login</h2>
        <form className="loginForm" onSubmit={this.props.handleFormSubmit}>
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" value="submit" />
        </form>
        <Link to="/signup">Signup</Link>
      </div>
    );
  }
}

export default Login;