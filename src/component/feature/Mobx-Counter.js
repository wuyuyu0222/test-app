import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

let appState = observable({
  counter: 0
});

@observer
class MobxCounter extends Component {

  handleDecrese = action(() => {
    appState.counter--;
  })

  handleIncrese = action(() => {
    appState.counter++;
  })

  render() {
    const { counter } = this.props.appState;
    return (
      <div>
        <button className="btn" onClick={this.handleDecrese}>-</button>
        <button className="btn" onClick={this.handleIncrese}>+</button>
        counter: {counter}
      </div>
    )
  }
}

export default MobxCounter