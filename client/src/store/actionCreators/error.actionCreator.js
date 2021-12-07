import {ADD_ERROR, REMOVE_ERROR} from "../actions";

export const onError = message => {
    return dispatch => {
        dispatch(addError(message))
        setTimeout(() => dispatch(removeError(message)), 5000)
    }
}

const addError = message => {
    return {
        type: ADD_ERROR,
        payload: message
    }
}

const removeError = () => {
    return {
        type: REMOVE_ERROR
    }
}