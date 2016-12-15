import { LOAD_FOOD } from '../actions/types.js';


export default function loadFood( state = {}, action) {
	switch(action.type) {
		case LOAD_FOOD:
		console.log('klkl', action.payload);
			return [action.payload]
	}

	return state;
}