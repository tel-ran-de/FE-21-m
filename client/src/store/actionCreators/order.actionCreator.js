import {onError} from "./error.actionCreator";
import {URL, TOKEN} from '../lib/vars'
import {startLoading, stopLoading} from "./ui.actionCreator";
import {ADD_ORDER, FETCH_ORDERS, GET_ORDER_BY_ID, IS_ORDER_ACTION} from "../actions";

export const getOrders = () => {
    return async dispatch => {
        try {
            dispatch(startLoading())
            dispatch(setActiveOrders(null))
            const res = await fetch(`${URL}/orders`)
            const data = await res.json()
            if (res.status !== 200) {
                return dispatch(onError(data.message))
            }
            dispatch(fetchOrders(data))

        } catch (e) {
            dispatch(onError(e.message))
        }finally {
            dispatch(stopLoading())
        }
    }
}

export const getOrderById = orderId => {
    return async dispatch => {
        try {
            dispatch(startLoading())
            const res = await fetch(`${URL}/orders/` + orderId)
            const data = await res.json()
            if (res.status !== 200) {
                return dispatch(onError(data.message))
            }
            dispatch(setActiveOrders(data))
        } catch (e) {
            dispatch(onError(e.message))
        }finally {
            dispatch(stopLoading())
        }
    }
}

export const addOrder = order => {
    return async dispatch => {
        try {
            dispatch(startLoading())
            const res = await fetch(`${URL}/orders/`, {
                method: 'POST',
                body: JSON.stringify(order),
                headers: {
                    'Content-Type': 'application/json',
                    'x-oauth-token': TOKEN()
                }
            })
            const data = await res.json()
            if (res.status !== 200) {
                return dispatch(onError(data.message))
            }
            dispatch(addNewOrder(data))
            dispatch(changeOrderAction(true))
        } catch (e) {
            dispatch(onError(e.message))
        }finally {
            dispatch(stopLoading())
        }
    }
}

const fetchOrders = data => {
    return {
        type: FETCH_ORDERS,
        payload: data
    }
}

const setActiveOrders = order => {
    return {
        type: GET_ORDER_BY_ID,
        payload: order
    }
}

const addNewOrder = order => {
    return {
        type: ADD_ORDER,
        payload: order
    }
}

export const changeOrderAction = (flag) => {
    return {
        type: IS_ORDER_ACTION,
        payload: flag
    }
}