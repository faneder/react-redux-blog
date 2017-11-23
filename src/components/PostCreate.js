import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';

const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Required'
  } else if (values.title.length > 5) {
    errors.title = 'Must be 5 characters or less'
  }

  if (!values.content) {
    errors.content = 'Required'
  }

  return errors
}

const warn = values => {
  const warnings = {}
  if (!values) {
    warnings.content = 'it is better for you to add tags'
  }
  return warnings
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className={`form-group ${(touched && error) && 'has-danger'}`}>
    <label>{label}</label>
    <div>
      <input className ="form-control" {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <div className="alert alert-danger">{error}</div>) ||
          (warning && <div className="alert alert-warning">{warning}</div>))
      }
    </div>
  </div>
)

class PostCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    this.setState({ isLoading: true });

    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
      const { handleSubmit, submitting } = this.props
      let isLoading = this.state.isLoading;

      return(
          <form onSubmit={handleSubmit(this.onSubmit)}>
              <Field
                  name="title"
                  label="Title"
                  type="text"
                  component={renderField}
              />
              <Field
                  name="categories"
                  label="Categories"
                  type="categories"
                  component={renderField}
              />
              <Field
                  name="content"
                  label="Content"
                  type="content"
                  component={renderField}
              />
              <div>
                  <button
                    className="btn btn-action btn-primary"
                    type="submit"
                    value="Submit"
                    disabled={submitting || isLoading}
                  >
                  Submit
                  </button>
                  <Link to="/" className="btn btn-action btn-danger">Cancel</Link>
              </div>
          </form>
      )
  }
}

export default reduxForm({
    form: 'PostNewForm', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
    warn // <--- warning function given to redux-form
})(connect(null, { createPost })(PostCreate));
