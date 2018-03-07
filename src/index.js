import React, { Component } from 'react';
import { render } from 'react-dom';

import './assets/css/style.css';

import App from './Components/App';

export default class Index extends Component {
  render() {
    return (
      <App />
    )
  }
}

render(<Index />, document.getElementById('app'));
