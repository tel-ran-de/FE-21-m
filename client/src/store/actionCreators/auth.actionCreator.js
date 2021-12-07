import {onError} from "./error.actionCreator";
import {ADD_AUTH} from "../actions";
const URL = 'http://localhost:8080/api/v1'


export const doRegistration = data => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL}/auth/registration`, {
                method: 'POST',
                body: JSON.stringify({...data}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const body = await response.json()
            if (response.status !== 200) {
                return dispatch(onError(body.message))
            }
            dispatch(doLogin(data))
        } catch (e) {
            dispatch(onError(e.message));
        }
    }
}

export const doLogin = data => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL}/auth/login`, {
                method: 'POST',
                body: JSON.stringify({email: data.email, password: data.password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const body = await response.json()
            console.log('action',body)
            if (response.status !== 200) {
                return dispatch(onError(body.message))
            }
            dispatch(addAuth(body))
            localStorage.setItem('authInfo', JSON.stringify(body))
        } catch (e) {
            dispatch(onError(e.message))
        }
    }
}

const addAuth = data => {
    return {
        type: ADD_AUTH,
        payload: data
    }
}