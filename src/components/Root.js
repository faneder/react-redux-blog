import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { FETCH_AUTH_SUCCESS } from '../actions/types';


const Root = ({ store }) => {

	const token = localStorage.getItem('token');

	//If we have a token, consider the user to be signed in
	if (token) {
	    // we need to update application state
		store.dispatch({ type: FETCH_AUTH_SUCCESS });
	}

	return (
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);
};

export default Root;