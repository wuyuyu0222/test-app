import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import About from './component/About';
import Hello from './component/Hello';

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
              </ul>
            </div>
          </div>
          <div className="App-container">
            <Route exact path="/" component={About} />
            <Route path="/hello" render={props => <Hello name="jake" {...props} />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
