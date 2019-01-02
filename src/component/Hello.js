import React, { Component } from 'react'
import './Hello.css';
import logo from '../logo.svg';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.name = props.name || 'World';
  }

  render() {
    return (
      <div className="row mt-2x">
        <div className="col s12">
          <div className="card-panel grey lighten-5 z-depth-1">
            <div className="row valign-wrapper">
              <div className="col s2">
                <img src={logo} alt="logo" />
              </div>
              <div className="col s10">
                <p>Hello {this.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hello;
