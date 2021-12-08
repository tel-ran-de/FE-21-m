import {ADD_AUTH, CLEAR_AUTH} from "../actions";

const initState = {
    isAuth: false,
    user: null,
    accessToken: ''
}

export const AuthReducer = (state=initState, {type, payload}) => {
    switch (type) {

        case ADD_AUTH:
            return {...state, isAuth: true, user: payload.user, accessToken: payload.accessToken}

        case CLEAR_AUTH: {
            return {...state, ...initState}
        }

        default:
            return state
    }
}