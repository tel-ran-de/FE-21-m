import {ADD_POST, REMOVE_POST} from "./actions";

export const addNewPost = (post) => {
    return {
        type: ADD_POST,
        payload: {...post, id: Date.now(), published: true},
    }
}

export const removePost = postId => {
    return {
        type: REMOVE_POST,
        payload: postId
    }
}