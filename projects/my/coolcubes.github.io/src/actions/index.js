import * as types from './constants.js';

/*export function phoneSend(phone) {
	return dispatch => {
		dispatch( { type: types.PHONE_SEND, payload: phone });
	}
}*/

export function selectButton(button) {
	return {
		type: types.SELECT_BUTTON,
		payload: button 
	}
}