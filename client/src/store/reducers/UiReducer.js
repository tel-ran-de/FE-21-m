const {CHANGE_LOADING} = require("../actions");
const initState = {
    isLoading: false
}

export const UiReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case CHANGE_LOADING:
            return {...state, isLoading: payload}
        default:
            return state
    }
}