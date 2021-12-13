import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    FETCH_ACTIVE_PRODUCT,
    FETCH_PRODUCTS,
    IS_PRODUCT_ACTION,
    UPDATE_PRODUCT
} from "../actions";

const initState = {
    list: [],
    activeProduct: null,
    isAction: false
}

export const ProductReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case FETCH_PRODUCTS:
            return {...state, list: payload}

        case FETCH_ACTIVE_PRODUCT:
            return {...state, activeProduct: payload}

        case ADD_PRODUCT:
            return {...state, list: [...state.list, payload]}

        case UPDATE_PRODUCT:
            return {
                ...state, list: state.list.map(p => {
                    return p.id === payload.id ? payload : p
                })
            }
        case DELETE_PRODUCT:
            return {...state, list: state.list.filter(p => p.id !== payload)}

        case IS_PRODUCT_ACTION:
            return {...state, isAction: payload}
        default:
            return state
    }
}