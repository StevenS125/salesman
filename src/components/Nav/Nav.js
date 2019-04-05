import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav>
        <a className="homeLogo" href="/" title="Home">
        <img src="/logo.png" alt="Mercedes-Benz"></img>
        </a>
        <div className="navHead">Mercedes-Benz Salesmen Steve Snyder</div>
        <ul>
          <li><a href="news.asp">News</a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="about.asp">About</a></li>
          <li><a href="about.asp">Blog</a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;