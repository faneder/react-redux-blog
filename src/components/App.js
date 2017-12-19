import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Auth from './auth/hoc/Auth';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Header from './Header';
import Users from './Users';
import PostIndex from './PostIndex';
import PostCreate from './PostCreate';
import PostShow from './PostShow';

const App = () => (
	<div>
		<Header />
		<div className="container">
		    <Switch>
		      <Route path="/auth/signin" component={SignIn} />
		      <Route path="/auth/signup" component={SignUp} />
		      <Route path="/posts/create" component={Auth(PostCreate)} />
		      <Route path="/posts/:id" component={PostShow} />
		      <Route path="/users" component={Users} />
		      <Route path="/" component={PostIndex} />
		    </Switch>
		</div>
	</div>
)

export default App;