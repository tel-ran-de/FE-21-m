import React, {useState} from 'react'
import Button from "../Ui/Button";
import {useDispatch} from "react-redux";
import {addNewPost} from "../../store/Posts/actionsCreator";

const Form = () => {

    const [post, setPost] = useState({title: '', content: ''});
    const dispatch = useDispatch()

    const onChangeField = event => {
        setPost( { ...post, [event.target.name]: event.target.value } )
    }

    const onSubmitForm = event => {
        event.preventDefault()
        dispatch( addNewPost(post) )
        setPost({title: '', content: ''})
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">New Deal</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    onChange={onChangeField}
                    value={post.title}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="content" className="form-label">Example textarea</label>
                <textarea
                    className="form-control"
                    id="content"
                    rows="3"
                    name="content"
                    onChange={onChangeField}
                    value={post.content}
                />
            </div>

            <Button
                clickHandler={onSubmitForm}
                type="submit"
                className="btn btn-sm btn-primary"
                label="Submit"
            />
        </form>
    )
}

export default Form