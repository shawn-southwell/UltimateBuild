import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { configs: [] };
  }

  componentWillMount() {
    // make ajax call to get list of saved configs
    // assume user is authenicated for now
    var getUrl = '/configlist';        
    $.get(getUrl)
      .then((data) => {
        //console.log('configlist', data);
        this.setState({ configs: data });
      })
      .catch((err) => { console.log('err', err); });

  }

  render() {
    //console.log('in dashboard render', this.state.configs);
    return(
      <div>
        <h2>Dashboard</h2>
        <p>This is the list of saved config files...</p>
        <ul>
        {this.state.configs.map((config, index) => {
          return <li><Link to="/dashboard/configDetail/{config._id}">Config # {config._id}</Link></li>;
        })}
        </ul>
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