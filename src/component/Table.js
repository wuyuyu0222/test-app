import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Table extends Component {
  static propTypes = {
    list: PropTypes.array
  };

  render() {
    if (this.props.list && this.props.list.length > 0) {
      const Headers = Object.keys(this.props.list[0])
        .filter(key => key !== 'id')
        .map(key => <th key={key}>{key.toUpperCase()}</th>);
      const Bodys = this.props.list.map(item => {
        const content = Object.keys(item)
          .filter(key => key !== 'id')
          .map(key => <td key={key}>{item[key]}</td>);
        return (
          <tr key={item.id}>{content}</tr>
        );
      });
      return (
        <div>
          <table className="highlight">
            <thead>
              <tr>
                {Headers}
              </tr>
            </thead>
            <tbody>
              {Bodys}
            </tbody>
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
