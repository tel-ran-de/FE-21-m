import {onError} from "./error.actionCreator";
import {TOKEN, URL} from "../lib/vars";
import {CHANGE_USER_ROLES, FETCH_USERS} from "../actions";
import {startLoading, stopLoading} from "./ui.actionCreator";

export const getAllUsers = () => {
    return async dispatch => {
        try {
            dispatch(startLoading())
            // dispatch(fetchUsers([]))
            const response = await fetch(`${URL}/users`, {
                headers: {
                    'x-oauth-token': TOKEN()
                }
            })
            const data = await response.json()
            if (response.status !== 200) {
                return dispatch(onError(data.message))
            }
            dispatch(fetchUsers(data))

        } catch (e) {
            dispatch(onError(e));
        } finally {
            setTimeout(()=>{
                dispatch(stopLoading())
            }, 1000)
        }
    }
}

export const doChangeUserRole = (userId, role) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL}/users/${userId}/change-role`, {
                method: 'PUT',
                body: JSON.stringify({
                    role
                }),
                headers: {
                    'Content-Type':'application/json',
                    'x-oauth-token': TOKEN()
                }
            })
            const data = await response.json()
            if (response.status !== 200) {
                return dispatch(onError(data.message))
            }
            dispatch(changeUserRole(data))
        } catch (e) {
            dispatch(onError(e.message));
        }
    }
}


const changeUserRole = user => {
    return {
        type: CHANGE_USER_ROLES,
        payload: user
    }
}

const fetchUsers = data => {
    return {
        type: FETCH_USERS,
        payload: data
    }
}