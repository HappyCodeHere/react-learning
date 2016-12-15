import { combineReducers } from 'redux';
import _ from 'lodash';

import { LOAD_FOOD, ADD_FOOD, DELETE_FOOD } from '../actions/types.js';


const rootReducer = combineReducers({
  loadFoodData: loadFood,
  addFoodData: addFood
});

export default rootReducer;


function loadFood( state = [], action) {
	switch(action.type) {
		case LOAD_FOOD:
			return [action.payload]
	}

	return state;
}


function addFood( state = [], action) {
	switch(action.type) {
		case ADD_FOOD:
			return [...state, action.payload]
		case DELETE_FOOD:
			let index = state.indexOf(action.payload);
			state.splice(index, 1);
			
			return [...state]
	}

	return state;
}