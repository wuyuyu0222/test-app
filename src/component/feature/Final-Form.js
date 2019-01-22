import React, { Component } from 'react'
import { Form, Field } from 'react-final-form';

export default class FinalForm extends Component {

  constructor(props) {
    super(props);
    this.initialValues = {
      name: '',
      email: '',
      gender: ''
    }
  }


  onSubmit = (value) => {
    console.log(value);
  }

  render() {
    return (
      <div className="row mt-2x">
        <Form
          className="col s12"
          onSubmit={this.onSubmit}
          initialValues={this.initialValues}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <Field name="name" component="input"
                    type="text" placeholder="name" />
                </div>
                <div className="input-field col s12">
                  <Field name="email" component="input"
                    type="email" placeholder="email" />
                </div>
                <div className="input-field col s12">
                  <p className="left">
                    <label className="mr-2x">
                      <Field name="gender" component="input"
                        type="radio" value="male" />
                      <span>male</span>
                    </label>
                    <label>
                      <Field name="gender" component="input"
                        type="radio" value="female" />
                      <span>female</span>
                    </label>
                  </p>
                </div>
                <div className="buttons">
                  <button className="btn mr-2x"
                    type="submit"
                    disabled={submitting || pristine}
                  >
                    Submit
                  </button>
                  <button
                    className="btn"
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          )}
        />
      </div>
    )
  }
}
