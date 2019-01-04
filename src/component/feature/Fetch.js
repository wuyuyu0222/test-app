import React, { Component } from 'react'
import Table from './Table';

export default class Fetch extends Component {
  constructor(props) {
    super(props);
    this.apiUrl = 'https://jsonplaceholder.typicode.com/users';
    this.state = {
      loaded: false,
      error: false
    };
    this.personList = [];
  }

  componentDidMount() {
    fetch(this.apiUrl).then(res => res.json()).then(response => {
      console.log(response);
      this.personList = response.map(r => {
        return { id: r.id, name: r.name, email: r.email, phone: r.phone };
      });
      this.setState({ loaded: true, error: false });
    }, error => {
      this.setState({ error: true })
    });
  }

  render() {
    return (
      <div className="row mt-2x">
        <Table list={this.personList} />
      </div>
    )
  }
}
