import React from 'react'
import Button from "../Ui/Button";
import {useDispatch} from "react-redux";
import { removePost } from "../../store/Posts/actionsCreator";

const Item = ({item}) => {

    const dispatch = useDispatch()

    const removeItem = () => dispatch( removePost( item.id ) )

    return (
        <div className="row">
            <div className="col-sm-8">
                <div className="card">
                    <h3 className="card-title">{item.title}</h3>
                    <div className="card-body">
                        <p className="card-text">{item.content}</p>
                    </div>
                </div>

            </div>
            <div className="col-sm-4">
                <Button
                    label="Remove"
                    className="btn btn-danger btn-sm"
                    type="button"
                    clickHandler={removeItem}
                />
            </div>


        </div>


    )
}

export default Item