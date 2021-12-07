import {ADD_ERROR, REMOVE_ERROR} from "../actions";

const initState = {
    isError: false,
    message: ''
}

export const ErrorReducer = (state=initState, {type, payload}) => {
    switch (type) {

        case ADD_ERROR:
            return {isError: true, message: payload}

        case REMOVE_ERROR:
            return initState

        default:
            return state
    }
}