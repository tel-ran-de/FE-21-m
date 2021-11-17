import React from 'react'
import {useSelector} from "react-redux";
import CommentItem from "./CommentItem";

export default props => {
    const post = useSelector(state => state.activePost)
    const comments = useSelector(state => state.comments)
    return (
        <div className="card p-3">
            <h2 className="card-title">{post.title}</h2>
            <div
                className="card-body"
                style={{maxHeight: "450px", overflow: 'auto'}}
            >
                <div className="card-text">
                    {post.body}
                </div>
                <ul className="group-list">
                    {
                        comments.map(comment =>
                            <CommentItem
                                key={comment.id}
                                comment={comment}
                            />)
                    }
                </ul>
            </div>

            <div className="card-action">
                <button className="btn btn-sm btn-success" onClick={props.closeModalHandler}>
                    Close
                </button>
            </div>


        </div>
    )
}