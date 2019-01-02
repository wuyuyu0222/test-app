import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      age: 0
    };
  }

  handleInput = (e) => {
    const targetName = e.target.getAttribute('name');
    const value = e.target.value;
    this.setState({ [targetName]: value });
  }

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <span>Name: </span>
            <input type="text" name="name" value={this.state.name}
              onChange={this.handleInput} />
          </div>
          <div>
            <span>Gender: </span>
            <input type="radio" name="gender" value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleInput} />
            <input type="radio" name="gender" value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleInput} />
          </div>
          <div>
            <span>Age: </span>
            <input type="number" name="age" value={this.state.age}
              onChange={this.handleInput} />
          </div>
          <input type="submit" value="submit" />
        </form>
        <div>
          <div>
            <p>Name: {this.state.name}</p>
            <p>Gender: {this.state.gender}</p>
            <p>Age: {this.state.age}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
