import {ADD_POST, REMOVE_POST} from "./actions";

const initialState = {
    list: []
}

export const PostReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case ADD_POST:
            return {...state, list: [...state.list, payload]}

        case REMOVE_POST:
            return {...state, list: state.list.filter(p => p.id !== payload)}

        default:
            return state
    }
}