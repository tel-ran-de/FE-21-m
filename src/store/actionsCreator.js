import {
    CHANGE_ACTIVE_POST,
    CHANGE_ACTIVE_USER,
    CHANGE_IS_LOADING,
    FETCH_COMMENTS,
    FETCH_POSTS,
    FETCH_USERS
} from "./actions";

export const getAllUsers = () => {
    return async (dispatch) => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            dispatch( addAllUsers(data) )
        } catch (e) {
            console.log( e.message )
        }

    }
}

export const getPostsByUserId = (userId) => {
    return async dispatch => {
        try {
            dispatch( addPosts([]) )
            dispatch( postsIsLoadingToggle(true) )
            setTimeout(async ()=> {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
                const data = await response.json()
                await dispatch( addPosts(data) )
                dispatch( postsIsLoadingToggle(false) )
            }, 500)

        } catch (e) {
            console.log( e.message )
        }
    }
}

export const changeActivePost = post => {
    return async dispatch => {
        try {

            dispatch( setActivePost(post) )
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + post.id)
            const data = await response.json()
            dispatch( addComments(data) )

        } catch (e) {
            console.log( e.message )
        }
    }
}

export const removeActivePost = () => {
    return dispatch => {
        dispatch( setActivePost(null))
        dispatch(addComments([]))
    }
}

export const changeActiveUser = (user) => {
    return {
        type: CHANGE_ACTIVE_USER,
        payload: user
    }
}

const addAllUsers = data => {
    return {
        type: FETCH_USERS,
        payload: data
    }
}

const addPosts = data => {
    return {
        type: FETCH_POSTS,
        payload: data
    }
}

const postsIsLoadingToggle = flag => {
    return {
        type: CHANGE_IS_LOADING,
        payload: flag
    }
}

const setActivePost = data => {
    return {
        type: CHANGE_ACTIVE_POST,
        payload: data
    }
}

const addComments = data => {
    return {
        type: FETCH_COMMENTS,
        payload: data
    }
}