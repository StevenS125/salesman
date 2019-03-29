import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav>
        <a className="homeLogo" href="/" title="Home">
        <img src="https://static.dealer.com/v8/global/images/franchise-logos/auto/m/mercedes-benz/black/183x125.png?r=1455202677000" alt="Mercedes-Benz"></img>
        </a>
        <ul>
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">News</a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="about.asp">About</a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;