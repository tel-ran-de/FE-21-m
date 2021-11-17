import {
    CHANGE_ACTIVE_POST,
    CHANGE_ACTIVE_USER,
    CHANGE_IS_LOADING,
    FETCH_COMMENTS,
    FETCH_POSTS,
    FETCH_USERS
} from "./actions";

const initialState = {
    users: [],
    activeUser: null,
    posts: [],
    postsIsLoading: false,
    activePost: null,
    comments: []
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case FETCH_USERS:
            return {...state, users: payload}

        case CHANGE_ACTIVE_USER:
            return {...state, activeUser: payload}

        case FETCH_POSTS:
            return {...state, posts: payload}

        case CHANGE_IS_LOADING:
            return {...state, postsIsLoading: payload}

        case CHANGE_ACTIVE_POST:
            return {...state, activePost: payload}

        case FETCH_COMMENTS:
            return {...state, comments: payload}

        default:
            return state
    }
}