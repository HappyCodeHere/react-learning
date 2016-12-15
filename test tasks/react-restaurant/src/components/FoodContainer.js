import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoodList from './FoodList.js';

import { loadFood, addFood } from '../actions/index.js';

class FoodContainer extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.props.loadFood();
	}

	render() {
		return (
			<div className="panel panel-primary food-container">
				<div className="panel-heading">
	    			<h2 className="panel-title"> Our delicious menu </h2>
	  			</div>
			  	<div className="panel-body">
			    	<FoodList data={this.props.loadFoodData} addFood={this.props.addFood}/>
			  	</div>
			</div>
				
		)
	}
}


function mapStateToProps(state) {
	return {
		loadFoodData: state.loadFoodData
	}
}


export default connect(mapStateToProps, { loadFood, addFood })(FoodContainer);