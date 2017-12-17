import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions';

const SigninButton = () => (
  <Link to="/auth/signin" className="btn btn-light">Sign In</Link>
)

const SignupButton = () => (
  <Link to="/auth/signup" className="btn btn-light">Sign Up</Link>
)

const LogoutButton = (props) => {
  return (
    <button onClick={props.onClick} className="btn btn-light">
      Logout
    </button>
  );
}

class Header extends Component {
  actionBtn() {
    if (this.props.auth) {
      return <LogoutButton onClick={() => this.props.signOut()} />
    }

    return (
      <div>
        <SigninButton />
        <SignupButton />
      </div>
    )
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Blog</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link">Users</Link>
            </li>
          </ul>
          <div>
            {this.actionBtn()}
          </div>
        </div>
      </nav>
    );
  }
}

//going to show up as props inside of our head or will place our map state to props
const mapStateToProps = (state) => {
  return { auth: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(Header);
