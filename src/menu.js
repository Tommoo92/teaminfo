import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import './style/css/base.css';

export class Menu extends React.Component {
  render() {
    return (
        <div className="menu">
          <div className="menu-Upper col-sm-12">
            <div className="logo-wrapper">
              <img src="./football.ico" className="logoIcon" alt=""></img>
              <div className="logoText">Teaminfo</div>
            </div>
          </div>
          <div className="menu-Lower col-sm-12">
            <nav>
              <ul>
                <li>
                  <Link to="/">Squads</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/users/">Users</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
    );
  }
}

