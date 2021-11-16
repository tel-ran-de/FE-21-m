import React from 'react'
import Button from "../Ui/Button";
import {useDispatch} from "react-redux";
import {changeDealById, removeDealById} from "../../store/Deals/actionsCreator";

const Item = ({item}) => {

    const dispatch = useDispatch()

    const removeItem = () => dispatch( removeDealById( item.id ) )
    const changeItem = () => dispatch( changeDealById( item.id))


    return (

            <div className="row">
                <div className="col-sm-8">
                    <p className={item.completed
                        ? 'alert alert-danger'
                        : 'alert alert-info'}
                    >{item.title}
                    </p>
                </div>
                <div className="col-sm-4">
                    <Button
                        label="Completed"
                        className="btn btn-success btn-sm"
                        type="button"
                        clickHandler={changeItem}
                    />

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