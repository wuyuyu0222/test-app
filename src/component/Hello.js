import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.name = props.name || 'World';
  }
  
  render() {
    return (
      <div className="Hello">
        <p>Hello, {this.name}</p>
      </div>
    );
  }
}

export default Hello;
