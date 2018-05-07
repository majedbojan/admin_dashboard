import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {HashRouter, Route, Switch} from 'react-router-dom';

import rootReducer from './reducers/index'
import Login       from './containers/Login/Login'
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

ReactDOM.render((
  // <Provider store={createStoreWithMiddleware(reducers)}>
   <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/login" name="Login Page" component={Login}/>
        <Route path="/" name="Home" component={App}/>
        {/* <Route path="books" name="Books" component={BookList}/> */}
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));
