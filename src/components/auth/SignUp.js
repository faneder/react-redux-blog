import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { signUp, showAlert } from '../../actions';
import { Alert } from '../alert/Alert';

import * as formValidate from '../../utils/formValidate';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className={`form-group row ${(touched && error) && 'has-danger'}`}>
    <label className="col-sm-2 col-form-label">{label}</label>
    <div className="col-sm-10">
      <input className ="form-control" {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <div className="alert alert-danger">{error}</div>) ||
          (warning && <div className="alert alert-warning">{warning}</div>))
      }
    </div>
  </div>
)

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(formProps) {
    console.log(formProps);
    this.props.signUp(formProps, this.props.history);
  }

  render() {
    const { handleSubmit, submitting, error, display } = this.props;

    return (
        <form onSubmit={handleSubmit(this.onSubmit)}>
          { (error && display) &&
            <Alert
              error={error}
            />
          }
          <Field
            name="name"
            label="Name"
            type="text"
            validate={[
              formValidate.required,
              formValidate.minLength5
            ]}
            component={renderField}
          />
          <Field
            name="email"
            label="Email"
            type="text"
            validate={[
              formValidate.required,
              formValidate.email
            ]}
            component={renderField}
          />
          <Field
            name="password"
            label="Password"
            type="password"
            validate={[
              formValidate.required,
              formValidate.minLength5
            ]}
            component={renderField}
          />
          <Field
            name="passwordConfirm"
            label="Confirm Password"
            type="password"
            validate={[
              formValidate.required,
              formValidate.minLength5,
              formValidate.passwordConfirm
            ]}
            component={renderField}
          />
          <button
              className="btn btn-action btn-primary"
              type="submit"
              value="Submit"
              disabled={submitting}
          >
            Submit
          </button>
          <Link to="/" className="btn btn-action btn-danger">Cancel</Link>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { error: state.auth.error, display: state.alert.display };
}

export default reduxForm({
    form: 'SignUpForm',
})(connect(mapStateToProps, { signUp, showAlert })(SignUp));