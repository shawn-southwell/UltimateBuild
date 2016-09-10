import React, { Component } from 'react';
import { Link } from 'react-router';
import Cookie from 'react-cookie';
import $ from 'jquery';
import Signup from './signup.jsx';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { ssid: Cookie.load('ssid') };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    console.log('state ssid', this.state.ssid);
    if(this.state.ssid) { // active user
      // redirect to /dashboard
      this.props.history.push('/dashboard');
    } else { // no active user
      // redirect to /signup
      this.props.history.push('/signup');
    }
  }

  // HACK: needed to declare a separate function to setState so that can also redirect to new route
  setHomeState(newStateObj) {
    this.setState(newStateObj);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    var userName = e.target.elements[0].value.trim();
    var passWord = e.target.elements[1].value.trim();

    if(!userName || !passWord) { // validation check, both fields required
      return;
    }

    var user = {username: userName, password: passWord};
    
    var postUrl;
    if(e.target.className === 'signupForm') {
      postUrl = '/signup';
    } else {
      postUrl = '/login'
    }

    // create new user or login user by making appropriate ajax post call
    $.post(postUrl, user)
      .then((data)=> {
        // HACK: needed to call setHomeState to allow updating of setState and route redirect
        this.setHomeState({ ssid: Cookie.load('ssid') });
        this.props.history.push('/dashboard');
      })
      .catch((err) => {console.log('err', err)});
  }

  render() {
    // Note: {childrenWithMoreProps} is a placeholder container, similar to ng-view, for displaying the content of different children routes
    
    var childrenWithMoreProps = React.Children.map(this.props.children, (child) => {
      if(child.type === Signup) {
        return React.cloneElement(child, {
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