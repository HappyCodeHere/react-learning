import React from 'react';

const ShoppingCartItem = (props) => {
	function deleteFood() {
		props.delete(props.name);
	}
	return (
		<div className="shopping-cart-item">
			<h3> {props.name} </h3>
			<button className="btn btn-danger btn-raised" onClick={deleteFood}> Delete </button>
		</div>
	)
}

export default ShoppingCartItem;