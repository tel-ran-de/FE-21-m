import React from 'react'
import Modal from "../Ui/Modal";
import PostDetail from "./PostDetail";
import {useDispatch, useSelector} from "react-redux";
import {changeActivePost, removeActivePost} from "../../store/actionsCreator";

export default ({post}) => {

    const activePost = useSelector(state => state.activePost) ?? {}
    const dispatch = useDispatch()

    const renderModal = () => {
        return activePost && activePost.id === post.id
            ? (<Modal>
                <PostDetail closeModalHandler={closeModal} />
                </Modal>)
            : null
    }

    const clickPostHandler = () => {
        dispatch(changeActivePost(post))
    }

    const closeModal = () => {
        dispatch( removeActivePost() )
    }

    return (
        <>
            <div
                style={{cursor: 'pointer'}}
                onClick={clickPostHandler}
            >{post.title}</div>
            {renderModal()}
        </>

    )
}