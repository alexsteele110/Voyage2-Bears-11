import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFieldChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      'password-confirm': this.state.passwordConfirm
    };

    fetch('/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          const errors = data.errors;
          errors.map(error => {
            const message = { type: 'error', text: error.msg };
            return this.props.updateMessages(null, message);
          });
        }
        // Handle redirect upon successful user creation.
        // Data object also contains a message property.
        const path = data.redirect;
        this.props.fetchUser();
        this.props.history.push(path);
      });
  }

  render() {
    const fieldsInfo = [
      { id: 'name', type: 'text', label: 'Name' },
      { id: 'email', type: 'email', label: 'Email' },
      { id: 'password', type: 'password', label: 'Password' },
      { id: 'passwordConfirm', type: 'password', label: 'Confirm Password' }
    ];

    const formFields = fieldsInfo.map(field => (
      <div className="row" key={field.id}>
        <div className="input-field col s12">
          <input
            id={field.id}
            type={field.type}
            className="validate"
            value={this.state[field.id]}
            onChange={this.handleFieldChange}
          />
          <label htmlFor="name">{field.label}</label>
        </div>
      </div>
    ));
    return (
      <div className="container">
        <h2>Register</h2>
        <form className="col s12" onSubmit={this.handleSubmit}>
          {formFields}
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(Register);
