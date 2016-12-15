import React from 'react';

const FoodItem = (props) => {
	function addFoodFunc() {
		props.addFood(props.name);
	}
	return (
		<div className="food-item">
			<h3> {props.name} </h3>
			<p> Price: <span className="with-price"> {props.price}.00$ </span> </p>
			<img src={props.img} />
			<button className="btn btn-warning btn-raised" onClick={addFoodFunc}> Order now! </button>
		</div>
	)
}

export default FoodItem;