import React, { Component } from 'react';
import './style/css/base.css';
import {Menu} from './menu.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Squad} from './squad.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Menu/>
          <div className="container main">
            <div className="row">
            <Route path="/" exact component={Squad} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
            </div>
          </div>
        </div>
      </Router>    
    );
  }
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
