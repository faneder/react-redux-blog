import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import Auth from './components/auth/hoc/Auth';
import Header from './components/Header';
import PostIndex from './components/PostIndex';
import PostCreate from './components/PostCreate';
import PostShow from './components/PostShow';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
            <Switch>
              <Route path="/posts/create" component={Auth(PostCreate)} />
              <Route path="/posts/:id" component={PostShow} />
              <Route path="/" component={PostIndex} />
            </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#container'));
