import React, { Component } from 'react';
import CartItem from './CartItem.js';

export default class App extends Component {
  render() {
    return (
      <div>
      	<CartItem price={10}/>
      </div>
    );
  }
}
