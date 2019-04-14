import React from "react";
import {Link} from 'react-router-dom';
import './header.scss';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          <i className="material-icons">cast</i>
          Streams
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">
              All streams
            </Link>
          </li>
          <li>
            <GoogleAuth/>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
