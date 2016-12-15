import React, { Component } from 'react';

import FoodItem from './FoodItem.js';

class FoodList extends Component {
	constructor(props) {
		super(props)
	}

	render() {

		let list;
		let data = this.props.data[0] || {};

		if ( Object.keys(data).length !== 0 ) {
			list = Object.keys(data).map( item => {
				let list2 = Object.keys(data[item]).map( item2 => {
					let renderItem = data[item][item2];
					let { name, price, img } = renderItem;
					
					let data1 = <FoodItem key={renderItem.name} name={name} price={price} img={img} addFood={this.props.addFood}/>
					return data1
				})

				return list2
			})
		}
		return (
			<div className="food-list">
				{list}
			</div>
		)
	}
}




export default FoodList;