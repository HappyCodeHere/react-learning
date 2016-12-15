import React, { Component } from 'react';

class CartItem extends Component {
	constructor(props) {
		super(props)

		this.state = {
			count: 1,
			price: this.props.price
		}

		this.onButtonInc = this.onButtonInc.bind(this);
		this.onButtonDec = this.onButtonDec.bind(this);
		this.onChangePrice = this.onChangePrice.bind(this);
	}

	render() {
		return (
			<div className="main">
				<img src="https://images6.alphacoders.com/368/368872.jpg" />
				<h1> Fresh fruits package </h1>
				<p className="quantity"> Quantity: {this.state.count} </p>
				<div className="buttons">
					<button className="btn btn-success" onClick={this.onButtonInc}> + </button>
					<button className="btn btn-danger" onClick={this.onButtonDec}> - </button>
				</div>
				<p className="costs"> Price per item: ${this.state.price} </p>
				<p> Total: ${this.state.count * this.state.price} </p>
				Change Price
				<input className="change-price" value={this.state.price} onChange={this.onChangePrice} />
			</div>
		);
	}

	onButtonInc() {
		this.setState({ count: this.state.count +1 })
	}

	onButtonDec() {
		if(!this.state.count == 0) {
			this.setState({ count: this.state.count -1 })
		}
	}

	onChangePrice(event) {
		console.log(typeof(event.target.value));
		// value = event.target.value
		// if( typeof(event.target.value) == 'number' ) {
		// 	this.setState({price: event.target.value})
		// }

	}


}


export default CartItem;