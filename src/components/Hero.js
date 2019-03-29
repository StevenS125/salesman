import React, { Component } from 'react';
import './hero.scss';

class Hero extends Component {
  render() {
    return (
      <div>
        <header>
          <div id="vidWrapper">
            <video autoPlay loop id="myVideo">
                <source src="benz.mp4" type="video/mp4">
                </source> 
            </video>
          </div>
        </header>
      </div>
    );
  }
}

export default Hero;