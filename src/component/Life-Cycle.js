import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class LifeCycle extends Component {
  static propTypes = {
    message: PropTypes.string
  }

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
      <div className="row mt-2x">
        <div className="col s12">
          <button className="waves-effect waves-light btn"
            onClick={this.handleClick}>button</button>
          <p>time stamp: {this.state.date.toLocaleTimeString()}</p>
        </div>
      </div>
    );
  }
}
