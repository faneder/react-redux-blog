import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
	class Auth extends Component {
		static contextTypes = {
			router: React.PropTypes.object
		}

		redirectTo(url) {
			this.context.router.history.push(url);
		}

		componentWillMount() {
			if (!this.props.auth) {
				this.redirectTo('/');
			}
		}

		componentWillUpdate(nextProps) {
			if (!nextProps.auth) {
				this.redirectTo('/');
			}
		}

		render() {
			return <ComposedComponent {...this.props} />
		}
	}

	const mapStateToProps = (state) => {
	  return { auth: state.auth };
	}

	return connect(mapStateToProps)(Auth);
}
