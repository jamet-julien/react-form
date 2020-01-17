import React from 'react';
import './RegisterForm.css';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      touched: {},
      errors: {},
      values: {
        email: '',
        password: '',
        confirm: '',
      },
    }
  }

  handleInputChange(e, field) {
    const errors = this.state.errors;
    delete errors[field];

    this.setState({
      ...this.state,
      touched: {
        ...this.state.touched,
        [field]: true,
      },
      values: {
        ...this.state.values,
        [field]: e.currentTarget.value,
      },
      errors,
    });
  }

  validateForm(values) {
    let errors = {};
    if (!values.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
      errors = {
        ...errors,
        email: ['You have to provide a valid email.'],
      };
    }

    if (values.password.length < 5 || values.password.length > 16) {
      errors = {
        ...errors,
        password: ['Your password must be between 5 and 16 characters length.'],
      };
    }

    if (values.confirm.length < 5 || values.confirm.length > 16) {
      errors = {
        ...errors,
        confirm: ['Your password must be between 5 and 16 characters length.'],
      };
    }

    if (values.confirm !== values.password) {
      const passwordError = undefined !== errors.password
        ? [
          ...errors.password,
          'Your passwords must match.'
        ]
        : ['Your passwords must match'];

      errors = {
        ...errors,
        password: passwordError,
      };
    }

    this.setState({
      ...this.state,
      errors,
    });

    return 0 === Object.keys(errors).length;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.validateForm(this.state.values)) {
      return;
    }

    alert(JSON.stringify(this.state.values));
  }

  render() {
    const isEmailError = undefined !== this.state.errors.email && this.state.touched.email;
    const isPasswordError = undefined !== this.state.errors.password && this.state.touched.password;
    const isConfirmError = undefined !== this.state.errors.confirm && this.state.touched.confirm;

    return (
      <div className="RegisterForm">
        <h1>Registration form</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className={`form-item${isEmailError ? ' has-error' : ''}`}>
            <label htmlFor="">Email</label>
            <input type="text" value={this.state.values.email} onChange={(e) => this.handleInputChange(e, 'email')} />
            {isEmailError && <span className="error-message">{this.state.errors.email.map((err, k) => <span key={k} className="error-item">{err}</span>)}</span>}
          </div>
          <div className={`form-item${isPasswordError ? ' has-error' : ''}`}>
            <label htmlFor="">Password</label>
            <input type="text" value={this.state.values.password} onChange={(e) => this.handleInputChange(e, 'password')} />
            {isPasswordError && <span className="error-message">{this.state.errors.password.map((err, k) => <span key={k} className="error-item">{err}</span>)}</span>}
          </div>
          <div className={`form-item${isConfirmError ? ' has-error' : ''}`}>
            <label htmlFor="">Confirm</label>
            <input type="text" value={this.state.values.confirm} onChange={(e) => this.handleInputChange(e, 'confirm')} />
            {isConfirmError && <span className="error-message">{this.state.errors.confirm.map((err, k) => <span key={k} className="error-item">{err}</span>)}</span>}
          </div>
          <div className="form-item">
            <input type="submit" value="Register !" />
          </div>
        </form>
      </div>
    )
  }
}

export default RegistrationForm;
