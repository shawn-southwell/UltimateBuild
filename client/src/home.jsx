import React, { Component } from 'react';
import { Link } from 'react-router';
import Cookie from 'react-cookie';
import $ from 'jquery';
import Signup from './signup.jsx';


class Home extends Component {
  constructor(props) {
    super(props);
    console.log('ssid', Cookie.load('ssid'));
    this.state = { ssid: Cookie.load('ssid') };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleFormSubmit(e) {
    e.preventDefault();

/*
    var data =  $(e.target).serialize();
    data = encodeURIComponent(data);
    console.log('data', data);
    console.log('e.target.className ', e.target.className );
*/
    var username = this.state.username.trim();
    var password = this.state.password.trim();

    if(!username || !password) {
      return;
    }

    var user = {username: username, password: password};
    var postUrl;

    if(e.target.className === 'signupForm') {
      postUrl = '/signup';
    } else {
      postUrl = '/login'
    }

    console.log('postUrl', postUrl);
    // make the ajax call
      
    $.ajax({
      type: 'POST',
      url: postUrl,
      data: user,
      dataType: 'application/json',
      success: (result) => {
        console.log('result', result);
        //this.setState({urls: data});
      },
      error: (err) => {
        console.log(err);
      }	
    });

  }

  render() {
    // Note: {this.props.children} or {childrenWithMoreProps} is a placeholder container, similar to ng-view, for displaying the content of different children routes
    
    var childrenWithMoreProps = React.Children.map(this.props.children, (child) => {
      if(child.type === Signup) {
        return React.cloneElement(child, {
          handleUsernameChange: this.handleUsernameChange,
          handlePasswordChange: this.handlePasswordChange,
          handleFormSubmit: this.handleFormSubmit
        });
      } else {
        return child;
      }
    });

    return(
      <div>
        <h2>Home</h2>
        <ul>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
         {childrenWithMoreProps}
      </div>
    );
  }
}

export default Home;