import React from 'react';
import ReactDOM from 'react-dom';

import { signup, login, logout } from './util/session_api_util';

window.signup = signup;
window.login = login;
window.logout = logout;

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <h1>Welcome to BenchBnB</h1>,
      document.getElementById('root')
    );
});
