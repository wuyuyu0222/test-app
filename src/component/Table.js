import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Table extends Component {
  static propTypes = {
    list: PropTypes.array
  };

  drawHeader = (list) => {
    const Headers = Object.keys(this.props.list[0])
      .filter(key => key !== 'id')
      .map(key => <th key={key}>{key.toUpperCase()}</th>);
    return (
      <thead>
        <tr>
          {Headers}
        </tr>
      </thead>
    )
  }

  drawBody = (list) => {
    const Bodys = this.props.list.map(item => {
      const content = Object.keys(item)
        .filter(key => key !== 'id')
        .map(key => <td key={key}>{item[key]}</td>);
      return (
        <tr key={item.id}>{content}</tr>
      );
    });
    return (
      <tbody>
        {Bodys}
      </tbody>
    )
  }

  render() {
    if (this.props.list && this.props.list.length > 0) {
      return (
        <div>
          <table className="highlight">
            {this.drawHeader(this.props.list)}
            {this.drawBody(this.props.list)}
          </table>
        </div>
      )
    } else {
      return (
        <div className="mt-2x">
          <p>empty table</p>
        </div>
      )
    }
  }
}
