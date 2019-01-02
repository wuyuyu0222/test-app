import React, { Component } from 'react'

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { date: new Date() };
  }

  handleClick = () => {
    this.setState({ date: new Date() });
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log('nextProps:' + nextProps.message);
    console.log('nextState:' + nextState.date);
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>button</button>
        <h1>time stamp: {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default LifeCycle;