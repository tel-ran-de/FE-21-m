import {ADD_ITEM, CHANGE_ITEM, REMOVE_ITEM} from "./actions";

const initialState = {
    list: []
}

/*
id, title, completed
 */

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case ADD_ITEM:
            return {...state, list: [...state.list, payload]}

        case REMOVE_ITEM:
            return {...state, list: state.list.filter(d => d.id !== payload) }

        case CHANGE_ITEM:
            return {...state, list: state.list.map( deal => {
                if ( deal.id === payload ) return {...deal, completed: !deal.completed}
                return deal;
                } ) }

        default:
            return state

    }
}