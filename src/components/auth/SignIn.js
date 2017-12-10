import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { signIn, showAlert } from '../../actions';
import { Alert } from '../alert/Alert';

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (values.email.length < 5) {
    errors.email = 'Must be 5 characters or more'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 5) {
    errors.password = 'Must be 5 characters or more'
  }

  return errors
}

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

class SignIn extends Component {
	constructor(props) {
	  super(props);

	  this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit({email, password}) {
		console.log(email, password);
		this.props.signIn(email, password);
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
                  name="email"
                  label="Email"
                  type="text"
                  component={renderField}
              	/>
              	<Field
                  name="password"
                  label="Password"
                  type="password"
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
	console.log(`state ${state}`)
	console.log(state)
  return { error: state.auth.error, display: state.alert.display };
}

export default reduxForm({
    form: 'SignInForm',
    validate,
})(connect(mapStateToProps, { signIn, showAlert })(SignIn));