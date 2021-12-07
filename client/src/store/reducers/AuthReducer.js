import {ADD_AUTH} from "../actions";

const initState = {
    isAuth: false,
    user: null,
    accessToken: ''
}

export const AuthReducer = (state=initState, {type, payload}) => {
    switch (type) {

        case ADD_AUTH:
            console.log( payload )
            return {...state, isAuth: true, user: payload.user, accessToken: payload.accessToken}

        default:
            return state
    }
}