import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import About from './component/About';
import Hello from './component/Hello';
import LifeCycle from './component/Life-Cycle';
import Form from './component/Form';
import Fetch from './component/Fetch';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-sidebar">
            <ul id="nav-mobile" className="sidenav">
              <li><Link to="/">App</Link></li>
              <li><Link to="hello">Hello</Link></li>
              <li><Link to="life-cycle">Life Cycle</Link></li>
              <li><Link to="form">Form</Link></li>
              <li><Link to="fetch">Fetch</Link></li>
            </ul>
          </div>
          <div className="container">
            <Route exact path="/" component={About} />
            <Route path="/hello" render={props => <Hello name="jake" {...props} />} />
            <Route path="/life-cycle" render={props => <LifeCycle message="test" {...props} />} />
            <Route path="/form" component={Form} />
            <Route path="/fetch" component={Fetch} />
          </div>
        </div>
      </Router>
    );
  }
}
