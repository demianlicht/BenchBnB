import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import SessionFormContainer from './session_form_container';
import BenchIndexContainer from './benches/bench_index_container';
import App from './app';

const _redirectIfLoggedIn = (nextState, replace, asyncDoneCallback) => {
  if (window.currentUser) {
    replace('/');
  }
};

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ BenchIndexContainer } />
        <Route
          path="/login"
          component={ SessionFormContainer }
          onEnter={ _redirectIfLoggedIn } />
        <Route
          path="/signup"
          component={ SessionFormContainer }
          onEnter={ _redirectIfLoggedIn } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
