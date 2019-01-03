import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      gender: '',
      personList: [],
      table: <table></table>
    };
  }

  handleInput = (e) => {
    const targetName = e.target.getAttribute('name');
    const value = e.target.value;
    this.setState({ [targetName]: value });
  }

  handleSubmit = (e) => {
    const id = this.state.personList.length + 1;
    const newPerson = [{
      id: id,
      name: this.state.name,
      gender: this.state.gender,
      email: this.state.email
    }];
    this.setState({
      name: '',
      gender: '',
      email: '',
      personList: newPerson.concat(this.state.personList)
    }, () => {
      this.setState({ table: this.drawTable() });
      console.log(this.state);
    });
    e.preventDefault();
  }

  drawTable = () => {
    console.log('drawTable');
    let personList = [];
    if (this.state.personList.length > 0) {
      personList = this.state.personList.map(person => {
        return (
          <tr key={person.id}>
            <td>{person.name || 'Null'}</td>
            <td>{person.email || 'Null'}</td>
            <td>{person.gender || 'Null'}</td>
          </tr>
        );
      });
    }
    return (
      <table className="highlight">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {personList}
        </tbody>
      </table>
    );
  }

  render() {
    if (this.state.error) {
      return (
        <div className="row mt-2x">
          <p>Error: {this.state.error.message}</p>
        </div>
      )
    }
    return (
      <div className="row mt-2x">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input type="text" id="input-name"
                name="name" value={this.state.name}
                onChange={this.handleInput} />
              <label htmlFor="input-name">Name</label>
            </div>
            <div className="input-field col s12">
              <input type="text" id="input-email"
                name="email" value={this.state.email}
                onChange={this.handleInput} />
              <label htmlFor="input-email">Email</label>
            </div>
            <div className="input-field col s12">
              <p className="left">
                <label className="mr-2x">
                  <input type="radio" name="gender" value="male"
                    onChange={this.handleInput}
                    checked={this.state.gender === "male"} />
                  <span>Male</span>
                </label>
                <label>
                  <input type="radio" name="gender" value="female"
                    onChange={this.handleInput}
                    checked={this.state.gender === "female"} />
                  <span>Female</span>
                </label>
              </p>
            </div>
          </div>
          <input type="submit" value="submit" className="btn" />
        </form>
        <div className="col s12">
          {this.state.table}
        </div>
      </div>
    )
  }
}
