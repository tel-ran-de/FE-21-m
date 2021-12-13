import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    FETCH_ACTIVE_PRODUCT,
    FETCH_COMPANIES, FETCH_PRODUCTS,
    IS_PRODUCT_ACTION,
    UPDATE_PRODUCT
} from "../actions";
import {onError} from "./error.actionCreator";
import {URL, TOKEN} from '../lib/vars'
import {startLoading, stopLoading} from "./ui.actionCreator";

export const getAllProducts = () => {
    return async dispatch => {
        try {
            dispatch(startLoading())
            dispatch(fetchActiveProduct(null))
            const res = await fetch(`${URL}/products`)
            const data = await res.json()
            if (res.status !== 200) {
                return dispatch(onError(data.message))
            }
            dispatch(fetchProducts(data))
        } catch (e) {
            dispatch(onError(e.message))
        } finally {
            setTimeout(()=>{
                dispatch(stopLoading())
            }, 1000)
        }
    }
}

export const getProductById = productId => {
    return async dispatch => {
        try {
            const res = await fetch(`${URL}/products/${productId}`)
            const data = await res.json()
            if (res.status !== 200) {
                return dispatch(onError(data.message))
            }
            dispatch(fetchActiveProduct(data))
        } catch (e) {
            dispatch(onError(e.message))
            // window.open("")
        }
    }
}

export const addNewProduct = product => {
    return async dispatch => {
        try {
            const res = await fetch(`${URL}/products`, {
                method: 'POST',
                body: JSON.stringify(product),
                headers: {
                    'Content-Type': 'application/json',
                    'x-oauth-token': TOKEN()
                }
            })
            const data = await res.json()
            if (res.status !== 200) {
                return dispatch(onError(data.message))
            }
            dispatch(addProduct(data))
            dispatch(changeProductAction(true))
        } catch (e) {
            dispatch(onError(e.message))
        }
    }
}

export const changeProduct = product => {
    return async dispatch => {
        try {
            const res = await fetch(`${URL}/products/${product.id}`, {
                method: 'PUT',
                body: JSON.stringify(product),
                headers: {
                    'Content-Type': 'application/json',
                    'x-oauth-token': TOKEN()
                }
            })
            const data = await res.json()
            if (res.status !== 200) {
                return dispatch(onError(data.message))
            }
            dispatch(updateProduct(data))
            dispatch(changeProductAction(true))
        } catch (e) {
            dispatch(onError(e.message))
        }
    }
}

export const removeProduct = productId => {
    return async dispatch => {
        try {
            const res = await fetch(`${URL}/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'x-oauth-token': TOKEN()
                }
            })
            const data = await res.json()
            if (res.status !== 200) {
                return dispatch(onError(data.message))
            }
            dispatch(deleteProduct(productId))
        } catch (e) {
            dispatch(onError(e.message))
        }
    }
}

const fetchProducts = data => {
    return {
        type: FETCH_PRODUCTS,
        payload: data
    }
}

const fetchActiveProduct = data => {
    return {
        type: FETCH_ACTIVE_PRODUCT,
        payload:data
    }
}

const addProduct = product => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

const updateProduct = product => {
    return {
        type: UPDATE_PRODUCT,
        payload: product
    }
}

const deleteProduct = productId => {
    return {
        type: DELETE_PRODUCT,
        payload: productId
    }
}

export const changeProductAction = (flag) => {
    return {
        type: IS_PRODUCT_ACTION,
        payload: flag
    }
}