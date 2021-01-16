import {
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,
	SIGN_OUT_SUCCESS,
	SIGN_OUT_FAILURE,
} from "../constants"

const initState = {
	isSignedIn: false,
	user: {},
}

const authReducer = (state = initState, action) => {
	const { type, payload } = action
	switch (type) {
		case SIGN_UP_SUCCESS:
			return state
		case SIGN_UP_FAILURE:
			return state
		case SIGN_IN_SUCCESS:
			return state
		case SIGN_IN_FAILURE:
			return state
		case SIGN_OUT_SUCCESS:
			return state
		case SIGN_OUT_FAILURE:
			return state
		default:
			return state
	}
}


export default authReducer