import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import Logout from './components/Logout';
import Articles from './components/Articles';
import Registration from './components/Registration';
import NewArticle from './components/NewArticle';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Articles} />
    	<Route path="login" component={Login}/>
    	<Route path="logout" component={Logout}/>
    	<Route path="registration" component={Registration}/>
    	<Route path="new-article" component={NewArticle}/>
    </Route>
  </Router>),
  document.getElementById('root')
);
