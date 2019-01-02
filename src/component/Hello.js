import React from 'react';
import './Hello.css';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name || 'World';
  }

  render() {
    return (
      <div>
        <p>Hello {this.name}</p>
      </div>
    );
  }
}

export default Hello;
