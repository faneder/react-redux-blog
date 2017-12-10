import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import { logger, crashReporter } from './middleware/logger';

import reducers from './reducers';

import Root from './components/Root';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, promise, logger, crashReporter)(createStore);

ReactDOM.render(<Root store={createStoreWithMiddleware(reducers)} />
  , document.querySelector('#container'));
