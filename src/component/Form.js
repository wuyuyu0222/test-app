import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      age: 0,
      personList: []
    };
  }

  handleInput = (e) => {
    const targetName = e.target.getAttribute('name');
    const value = e.target.value;
    this.setState({ [targetName]: value });
  }

  handleSubmit = (e) => {
    const id = this.state.personList.length;
    this.state.personList.push({
      id: id,
      name: this.state.name,
      gender: this.state.gender,
      age: this.state.age
    });
    this.setState({
      name: '',
      gender: '',
      age: 0
    });
    console.log(this.state);
    e.preventDefault();
  }

  displayTable = () => {
    let personList = [];
    if (this.state.personList.length > 0) {
      personList = this.state.personList.reverse().map(person => {
        return (
          <tr key={person.id}>
            <td>{person.name || 'Null'}</td>
            <td>{person.gender || 'Null'}</td>
            <td>{person.age || 'Null'}</td>
          </tr>
        );
      });
    }
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
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
                name="name" value={this.state.name}
                onChange={this.handleInput} />
              <label htmlFor="input-name">Name</label>
            </div>
            <div className="input-field col s12">
              <input type="number" id="input-age"
                name="age" value={this.state.age}
                onChange={this.handleInput} />
              <label htmlFor="input-age">age</label>
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
          {this.displayTable()}
        </div>
      </div>
    )
  }
}

export default Form
