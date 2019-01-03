import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false
    };
    this.personList = this.props.personList || [];
    this.person = this.props.person || { name: '', email: '', gender: '' };
    this.table = this.drawTable([]);
  }

  componentDidMount() {
    this.checkValid(this.person);
  }

  checkValid = (person) => {
    if (person &&
      (person.name || person.email ||
        person.gender === 'male' || person.gender === 'female')) {
      if (person.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        this.setState({ formValid: true });
      } else {
        this.setState({ formValid: false });
      }
    } else {
      this.setState({ formValid: false });
    }
  }

  handleInput = (e) => {
    const targetName = e.target.getAttribute('name');
    this.person[targetName] = e.target.value;
    this.checkValid(this.person);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.personList.length;
    const newPerson = [{
      id: id,
      name: this.person.name,
      email: this.person.email,
      gender: this.person.gender
    }];
    this.person = { name: '', email: '', gender: '' };
    this.personList = newPerson.concat(this.personList);
    this.table = this.drawTable(this.personList);
    this.checkValid(this.person);
  }

  drawTable = (inputList) => {
    console.log('drawTable', inputList);
    let personList = [];
    if (inputList.length > 0) {
      personList = inputList.map(person => {
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
    return (
      <div className="row mt-2x">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input type="text" id="input-name"
                name="name" value={this.person.name}
                onChange={this.handleInput} />
              <label htmlFor="input-name">Name</label>
            </div>
            <div className="input-field col s12">
              <input type="email" id="input-email"
                name="email" value={this.person.email}
                onChange={this.handleInput} />
              <label htmlFor="input-email">Email</label>
            </div>
            <div className="input-field col s12">
              <p className="left">
                <label className="mr-2x">
                  <input type="radio" name="gender" value="male"
                    onChange={this.handleInput}
                    checked={this.person && this.person.gender === 'male'} />
                  <span>Male</span>
                </label>
                <label>
                  <input type="radio" name="gender" value="female"
                    onChange={this.handleInput}
                    checked={this.person && this.person.gender === 'female'} />
                  <span>Female</span>
                </label>
              </p>
            </div>
          </div>
          <input type="submit" value="submit" className="btn" disabled={!this.state.formValid} />
        </form>
        <div className="col s12">
          {this.table}
        </div>
      </div>
    )
  }
}
