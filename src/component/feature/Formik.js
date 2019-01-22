import React, { Component } from 'react'
import { Formik } from 'formik';
export default class FormikForm extends Component {

  constructor(props) {
    super(props);
    this.initialValues = {
      name: '',
      email: '',
      gender: ''
    }
  }

  onSubmit = (value, { setSubmitting }) => {
    console.log(value);
    setTimeout(() => setSubmitting(false), 300);
  }

  render() {
    return (
      <div className="row">
        <Formik
          initialValues={this.initialValues}
          onSubmit={this.onSubmit}
          render={({
            values, handleChange,
            handleBlur, handleSubmit, isSubmitting
          }) => (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <input type="text" id="input-name"
                      name="name" value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="input-name">Name</label>
                  </div>
                  <div className="input-field col s12">
                    <input type="email" id="input-email"
                      name="email" value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="input-email">Email</label>
                  </div>
                  <div className="input-field col s12">
                    <p className="left">
                      <label className="mr-2x">
                        <input type="radio" name="gender"
                          value="male"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span>Male</span>
                      </label>
                      <label>
                        <input type="radio" name="gender" value="female"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span>Female</span>
                      </label>
                    </p>
                  </div>
                </div>
                <input type="submit" value="submit" className="btn" disabled={isSubmitting} />
              </form>
            )}
        />
      </div>
    )
  }
}
