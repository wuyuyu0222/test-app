import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Table extends Component {
  static propTypes = {
    list: PropTypes.array
  };

  render() {
    if (this.props.list && this.props.list.length > 0) {
      return (
        <div>
          <table className="highlight">
            <thead>
              <tr>
                <TableHeader list={this.props.list} />
              </tr>
            </thead>
            <tbody>
              <TableBody list={this.props.list} />
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

const TableHeader = (props) => {
  const { list } = props;
  const Headers = Object.keys(list[0]).filter(key => key !== 'id')
    .map(key => {
      return (
        <th key={key}>{key.toUpperCase()}</th>
      )
    });
  return Headers
}

const TableBody = (props) => {
  const { list } = props;
  const Bodys = list.map(item => {
    const content = Object.keys(item)
      .filter(key => key !== 'id')
      .map(key => {
        return (
          <td key={key}>{item[key]}</td>
        )
      });
    return (
      <tr key={item.id}>{content}</tr>
    );
  });
  return Bodys
}