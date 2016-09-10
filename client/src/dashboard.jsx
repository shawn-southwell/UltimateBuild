import React, { Component } from 'react';
import { Link } from 'react-router';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // make ajax call to get list of saved configs
    // assume user is authenicated for now

  }

  render() {
    return(
      <div>
        <h2>Dashboard</h2>
        <p>This is the list of saved config files...</p>

        <ul>
          <li><Link to="/dashboard/configForm">Config Form</Link></li>
          <li><Link to="/dashboard/configDetail/1">Config Detail</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default Dashboard;