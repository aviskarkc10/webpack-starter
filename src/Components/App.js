import React, { Component } from 'react';

import GaryOldman from '../assets/images/gary_oldman.jpg';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          My first component
        </div>
      <img className="img" src={ GaryOldman } alt="Gary Oldman" />
    </div>
    );
  }
}