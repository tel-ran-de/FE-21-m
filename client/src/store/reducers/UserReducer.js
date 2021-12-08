import {CHANGE_USER_ROLES, FETCH_USERS} from "../actions";

const initState = {
    list: []
}

export const UserReducer = (state = initState, {type, payload}) => {
    switch (type) {

        case FETCH_USERS:
            return {...state, list: payload}

        case CHANGE_USER_ROLES:
            return {
                ...state,
                list: state.list.map(u => {
                    if (u.id === payload.id) {
                        return payload
                    }
                    return u
                })
            }
        default:
            return state
    }
}