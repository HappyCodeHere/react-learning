import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartItem from './ShoppingCartItem.js';

import { deleteFood, sendData } from '../actions/index.js';

class ShoppingCart extends Component {
	constructor(props) {
		super(props);

		this.sendDataFunc = this.sendDataFunc.bind(this);
	}


	render() {

		let list;
		let data = this.props.addFoodData || {};

		if ( Object.keys(data).length !== 0 ) {
			list = Object.keys(data).map( item => {
				return <ShoppingCartItem key={item} name={data[item]} delete={this.props.deleteFood}/>
			})
		}
		return (
			<div className="panel panel-warning shopping-cart">
				<div className="panel-heading">
	    			<h2 className="panel-title"> Your Shopping Cart </h2>
	  			</div>
			  	<div className="panel-body">
					{list}
					<hr />
					{Object.keys(data).length !== 0 ? <button className="btn btn-info btn-raised" onClick={this.sendDataFunc}> Order! </button> : <p> Your Shopping Cart is empty </p> }
			  	</div>
			</div>
		)
	}

	sendDataFunc() {
		this.props.sendData(this.props.addFoodData);
	}
}


function mapStateToProps(state) {
	return {
		addFoodData: state.addFoodData
	}
}


export default connect(mapStateToProps, { deleteFood, sendData })(ShoppingCart);