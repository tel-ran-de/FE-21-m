import React, {useState} from 'react'
import Button from "../Ui/Button";
import {useDispatch} from "react-redux";
import {addNewDeal} from "../../store/Deals/actionsCreator";

const Form = () => {

    const [title, setTitle] = useState('');
    const dispatch = useDispatch()

    const onChangeTitle = event => {
        setTitle( event.target.value )
    }

    const onSubmitForm = event => {
        event.preventDefault()
        dispatch( addNewDeal(title) )
        setTitle('')
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">New Deal</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    onChange={onChangeTitle}
                    value={title}
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