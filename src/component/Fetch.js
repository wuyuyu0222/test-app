import React, { Component } from 'react'

export default class Fetch extends Component {
  constructor(props) {
    super(props);
    this.apiUrl = 'https://jsonplaceholder.typicode.com/users';
    this.state = {
      personList: [],
      table: <table></table>,
    };
  }

  componentDidMount() {
    fetch(this.apiUrl).then(res => res.json()).then(response => {
      console.log(response);
      const table = this.drawTable(response);
      this.setState({ personList: response, table: table });
    }, error => {
      const errorMessage = (
        <div>
          <p color="red">Error: {error.message}</p>
        </div>
      );
      this.setState({ table: errorMessage })
    });
  }

  drawTable = (personList) => {
    console.log('drawTable');
    const body = personList.map(person => {
      return (
        <tr key={person.id}>
          <td>{person.name || 'Null'}</td>
          <td>{person.email || 'Null'}</td>
          <td>{person.phone || 'Null'}</td>
          <td>{person.website || 'Null'}</td>
        </tr>
      );
    });
    return (
      <table className="highlight">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {body}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="row mt-2x">
        {this.state.table}
      </div>
    )
  }
}
