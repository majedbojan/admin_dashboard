import React from 'react';
import {ReactDOM, render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import configureStore from './store/configureStore';

import rootReducer from './reducers/index'
import Login       from './containers/Login/Login'
import ListClients from './containers/Client/ListClients'
// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import App from './containers/App/';
// import BookList from './containers/book_list/';

const store = createStore(rootReducer);
// const store = configureStore();

// ReactDOM.render((

const has_token = localStorage.getItem('token') ? true : false
render((
  // <Provider store={createStoreWithMiddleware(reducers)}>
  <HashRouter>
    { has_token
      ? <Switch>
        <Route path="/clients" component={ListClients} />
        <Route path="/" name="Home" component={App}/>

        {/* <Redirect to="/" /> */}
      </Switch>
      : <Switch>
        <Route exact path="/login" name="Login Page" component={Login}/>
        <Redirect to="/login" />
      </Switch>
    }
  </HashRouter>
), document.getElementById('root'));
