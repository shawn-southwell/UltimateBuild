import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default Signup;