import {
    ADD_ORDER,
    CHANGE_ORDER_STATUS,
    FETCH_ORDERS,
    GET_ORDER_BY_ID,
    IS_ORDER_ACTION,
    IS_PRODUCT_ACTION
} from "../actions";

const initState = {
    list: [],
    isAction: false,
    activeOrder: null
}

export const OrderReducer = (state = initState, {type, payload}) => {
    switch (type) {

        case FETCH_ORDERS:
            return {...state, list: payload}

        case ADD_ORDER:
            return {...state, list: [payload, ...state.list]}

        case CHANGE_ORDER_STATUS:
            return {...state, list: state.list.map(order => {
                if (order.id === payload.id) {
                    return payload
                }
                return order
                })}

        case GET_ORDER_BY_ID:
            return {...state, activeOrder: payload}

        case IS_ORDER_ACTION:
            return {...state, isAction: payload}

        default:
            return state
    }
}