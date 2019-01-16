import React, { Component } from 'react'
import store from '../../store/Store';
import { increse, decrese, reset } from '../../actions/Actions';


export default class ReduxCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: store.getState(),
      subscribe: true
    };
    this.unsubscribe = store.subscribe(() => {
      this.setState({ count: store.getState() });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleSubscribe = () => {
    this.setState({ count: store.getState(), subscribe: true });
    this.unsubscribe = store.subscribe(() => {
      this.setState({ count: store.getState() });
    })
  }

  handleUnsubscribe = () => {
    this.setState({ subscribe: false });
    this.unsubscribe();
  }

  handleIncrese = (value) => {
    store.dispatch(increse(value));
  }

  handleDecrese = (value) => {
    store.dispatch(decrese(value));
  }

  handleReset = () => {
    store.dispatch(reset);
  }


  render() {
    return (
      <div className="row mt-2x">
        <div className={"col s2 " + (this.state.subscribe ? 'greenText' : 'redText')}>
          count: {this.state.count}
        </div>
        <div className="col s2">
          <button className="btn" onClick={this.handleSubscribe}>Subscribe</button>
        </div>
        <div className="col s2">
          <button className="btn" onClick={this.handleUnsubscribe}>Unsubscribe</button>
        </div>
        <div className="col s2">
          <button className="btn" onClick={this.handleReset}>Reset</button>
        </div>
        <div className="col s1">
          <button className="btn" onClick={() => this.handleDecrese(1)}>-</button>
        </div>
        <div className="col s1">
          <button className="btn" onClick={() => this.handleIncrese(1)}>+</button>
        </div>
        <div className="col s1">
          <button className="btn" onClick={() => this.handleDecrese(5)}>-1</button>
        </div>
        <div className="col s1">
          <button className="btn" onClick={() => this.handleIncrese(5)}>+5</button>
        </div>
      </div>
    )
  }
}
