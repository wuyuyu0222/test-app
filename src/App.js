import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import About from './component/About';
import Hello from './component/Hello';
import LifeCycle from './component/Life-Cycle';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-sidebar">
            <div>
              <ul>
                <li><Link to="/">App</Link></li>
                <li><Link to="hello">Hello</Link></li>
                <li><Link to="life-cycle">Life Cycle</Link></li>
              </ul>
            </div>
          </div>
          <div className="App-container">
            <Route exact path="/" component={About} />
            <Route path="/hello" render={props => <Hello name="jake" {...props} />} />
            <Route path="/life-cycle" render={props => <LifeCycle message="test" {...props} />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
