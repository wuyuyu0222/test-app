import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import About from './component/feature/About';
import Hello from './component/feature/Hello';
import LifeCycle from './component/feature/Life-Cycle';
import Form from './component/feature/Form';
import Fetch from './component/feature/Fetch';

import ReduxCounter from './component/feature/Redux-Counter';

export default class App extends Component {
  render() {
    const person = {
      name: 'jake',
      email: 'jake@gmail.com',
      gender: 'male'
    };
    const message = 'test message';
    return (
      <Router>
        <div className="App">
          <div className="App-sidebar">
            <ul id="nav-mobile" className="sidenav">
              <li><h3>Test App</h3></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="hello">Hello</Link></li>
              <li><Link to="life-cycle">Life Cycle</Link></li>
              <li><Link to="form">Form</Link></li>
              <li><Link to="fetch">Fetch</Link></li>
              <li><Link to="redux">Redux</Link></li>
              <li><Link to="mobx">Mobx</Link></li>
            </ul>
          </div>
          <div className="container">
            <Route exact path="/" component={About} />
            <Route path="/hello" render={props => <Hello name={person.name} {...props} />} />
            <Route path="/life-cycle" render={props => <LifeCycle message={message} {...props} />} />
            <Route path="/form" render={props => <Form personList={[]} person={person} {...props} />} />
            <Route path="/fetch" component={Fetch} />
            <Route path="/redux" component={ReduxCounter} />
            <Route path="/mobx" />
          </div>
        </div>
      </Router>
    );
  }
}
