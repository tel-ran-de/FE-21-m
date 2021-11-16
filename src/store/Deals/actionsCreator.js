import {ADD_ITEM, CHANGE_ITEM, REMOVE_ITEM} from "./actions";

export const addNewDeal = (title) => {
    return {
        type: ADD_ITEM,
        payload: {
            id: Date.now(),
            title: title,
            completed: false
        }
    }
}

export const removeDealById = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}

export const changeDealById = (id) => {
    return {
        type: CHANGE_ITEM,
        payload: id
    }
}