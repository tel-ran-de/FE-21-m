import {
    ADD_COMPANY,
    DELETE_COMPANY,
    FETCH_ACTIVE_COMPANY,
    FETCH_COMPANIES,
    IS_COMPANY_ACTION,
    UPDATE_COMPANY
} from "../actions";
import {onError} from "./error.actionCreator";
import {URL, TOKEN} from '../lib/vars'
import {startLoading, stopLoading} from "./ui.actionCreator";

export const getAllCompanies = () => {
    return async dispatch => {
        try {
            dispatch(startLoading())
            // dispatch(fetchCompanies([]))
            dispatch(fetchActiveCompany(null))
            const res = await fetch(`${URL}/companies`)
            const data = await res.json()
            if (res.status !== 200) {
                return dispatch(onError(data.message))
            }
            dispatch(fetchCompanies(data))
        } catch (e) {
            dispatch(onError(e.message))
        } finally {
            setTimeout(()=>{
                dispatch(stopLoading())
            }, 1000)
        }
    }
}

export const getCompanyById = companyId => {
    return async dispatch => {
        try {
            const res = await fetch(`${URL}/companies/${companyId}`)
            const data = await res.json()
            if (res.status !== 200) {
                return dispatch(onError(data.message))
            }
            dispatch(fetchActiveCompany(data))
        } catch (e) {
            dispatch(onError(e.message))
            window.open(`https://stackoverflow.com/search?q='${e.message}`, '_blank')
        }
    }
}

export const addNewCompany = company => {
    return async dispatch => {
        try {
            const res = await fetch(`${URL}/companies`, {
                method: 'POST',
                body: JSON.stringify(company),
                headers: {
                    'Content-Type': 'application/json',
                    'x-oauth-token': TOKEN()
                }
            })
            const data = await res.json()
            if (res.status !== 200) {
                return dispatch(onError(data.message))
            }
            dispatch(addCompany(data))
            dispatch(changeCompanyAction(true))
        } catch (e) {
            dispatch(onError(e.message))
        }
    }
}

export const changeCompany = company => {
    return async dispatch => {
        try {
            const res = await fetch(`${URL}/companies/${company.id}`, {
                method: 'PUT',
                body: JSON.stringify(company),
                headers: {
                    'Content-Type': 'application/json',
                    'x-oauth-token': TOKEN()
                }
            })
            const data = await res.json()
            if (res.status !== 200) {
                return dispatch(onError(data.message))
            }
            dispatch(updateCompany(data))
            dispatch(changeCompanyAction(true))
        } catch (e) {
            dispatch(onError(e.message))
        }
    }
}

export const removeCompany = companyId => {
    return async dispatch => {
        try {
            const res = await fetch(`${URL}/companies/${companyId}`, {
                method: 'DELETE',
                headers: {
                    'x-oauth-token': TOKEN()
                }
            })
            const data = await res.json()
            if (res.status !== 200) {
                return dispatch(onError(data.message))
            }
            dispatch(deleteCompany(companyId))
        } catch (e) {
            dispatch(onError(e.message))
        }
    }
}

const fetchCompanies = data => {
    return {
        type: FETCH_COMPANIES,
        payload: data
    }
}

const fetchActiveCompany = data => {
    return {
        type: FETCH_ACTIVE_COMPANY,
        payload:data
    }
}

const addCompany = company => {
    return {
        type: ADD_COMPANY,
        payload: company
    }
}

const updateCompany = company => {
    return {
        type: UPDATE_COMPANY,
        payload: company
    }
}

const deleteCompany = companyId => {
    return {
        type: DELETE_COMPANY,
        payload: companyId
    }
}

export const changeCompanyAction = (flag) => {
    return {
        type: IS_COMPANY_ACTION,
        payload: flag
    }
}