import React, { Component } from 'react';

import NavBar from './NavBar.js';
import Main from './Main.js';

export default class App extends Component {
  render() {
    return (
      <div>
      	<NavBar />
      	{this.props.children}
      	<footer> для футера </footer>
      </div>
    );
  }
}
