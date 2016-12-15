import { 
	LOAD_FOOD, 
	ADD_FOOD, 
	DELETE_FOOD, 
	SEND_DATA } from './types.js';

import { data as foodData } from './foodData.js';
import axios from 'axios';


export function loadFood() {
	return {
		type: LOAD_FOOD,
		payload: foodData
	}
}

export function addFood(data) {
	return {
		type: ADD_FOOD,
		payload: data
	}
}

export function deleteFood(data) {
	return {
		type: DELETE_FOOD,
		payload: data
	}
}

export function sendData(data) {
	axios.post('/order', data);
	return {
		type: SEND_DATA,
		payload: data
	}
}