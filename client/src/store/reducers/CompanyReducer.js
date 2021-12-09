import {ADD_COMPANY, DELETE_COMPANY, FETCH_COMPANIES, IS_COMPANY_ACTION, UPDATE_COMPANY} from "../actions";

const initState = {
    list: [],
    isAction: false
}

export const CompanyReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case FETCH_COMPANIES:
            return {...state, list: payload}

        case ADD_COMPANY:
            return {...state, list: [...state.list, payload]}

        case UPDATE_COMPANY:
            return {
                ...state, list: state.list.map(c => {
                    return c.id === payload.id ? payload : c
                })
            }
        case DELETE_COMPANY:
            return {...state, list: state.list.filter(c => c.id !== payload)}

        case IS_COMPANY_ACTION:
            return {...state, isAction: payload}

        default:
            return state
    }
}