import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import Login from './components/routes/login';
import Dashboard from './components/routes/dashboard';
class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <Router>
          <div className="container">
            <Route exact path="/" component={Login}/>
            <Route exact path="/dashboard" component={Dashboard}/>
          </div>
        </Router>
      </CookiesProvider>
    );
  }
}

export default App;
