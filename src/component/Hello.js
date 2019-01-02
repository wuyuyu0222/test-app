import React from 'react';
import './Hello.css';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name || 'World';
    this.state = { time: new Date() };
    this.refreshTime();
  }

  refreshTime = () => {
    setInterval(() => this.setState({ time: new Date() }), 1000);
  };
  
  render() {
    return (
      <div>
        <p>Hello {this.name}, It is {this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Hello;
