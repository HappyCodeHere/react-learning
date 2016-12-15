import React, { Component } from 'react';
import FoodContainer from './FoodContainer.js';
import ShoppingCart from './ShoppingCart.js';

export default class App extends Component {
  render() {
    return (
    	<div className="app">
	      <div className="jumbotron">
	      	<h1> Welcome to our restaurant! </h1>
	      	<p> Best taste for minimum priсe </p>
	      </div>
	      <div className="main">
	      	<FoodContainer />
	      	<ShoppingCart />
	      </div>
	    </div>
    );
  }
}
