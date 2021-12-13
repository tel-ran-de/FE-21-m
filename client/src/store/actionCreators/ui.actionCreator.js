import {CHANGE_LOADING} from "../actions";

export const startLoading = () => {
    return {
        type: CHANGE_LOADING,
        payload: true
    }
}

export const stopLoading = () => {
    return {
        type: CHANGE_LOADING,
        payload: false
    }
}