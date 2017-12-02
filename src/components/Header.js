import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  actionBtn() {
    if (this.props.auth) {
      return <button onClick={() => this.props.authenticate(false)} className="btn btn-light">Sign Out</button>;
    }

    return <button onClick={() => this.props.authenticate(true)} className="btn btn-light">Sign In</button>;
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
              <Link to="/resources" className="nav-link">Resources</Link>
            </li>
          </ul>
          <div className="my-2 my-sm-0">
            {this.actionBtn()}
          </div>
        </div>
      </nav>
    );
  }
}

//going to show up as props inside of our head or will place our map state to props
const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(Header);
