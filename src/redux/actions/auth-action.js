import {
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,
	SIGN_OUT_SUCCESS,
	SIGN_OUT_FAILURE,
} from "../constants"

export const signUpSuccessAction = () => ({
	type: SIGN_UP_SUCCESS,
})

export const signUpFailureAction = () => ({
	type: SIGN_UP_FAILURE,
})

export const signInSuccessAction = () => ({
	type: SIGN_IN_SUCCESS,
})

export const signInFailureAction = () => ({
	type: SIGN_IN_FAILURE,
})

export const singOutSuccessAction = () => ({
	type: SIGN_OUT_SUCCESS,
})

export const singOutFailureAction = () => ({
	type: SIGN_OUT_FAILURE,
})

// export const  = () => ({})
