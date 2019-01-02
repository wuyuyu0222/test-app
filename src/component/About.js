import React from 'react';
import logo from '../logo.svg';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org"
          target="_blank" rel="noopener noreferrer">Learn React
        </a>
      </header>
    );
  }
}

export default About;
