import React from 'react'
import {useNavigate} from "react-router-dom";

export default ({order}) => {

    const navigate = useNavigate()

    const onClickHandler = e => {
        e.preventDefault()
        navigate('/orders/'+order.id)
    }

    return (
    <div className="row">
        <div className="col-1">{order.id}</div>
        <div className="col-3">{order.user.username}</div>
        <div className="col-3">{order.company.name}</div>
        <div className="col-2">
            <button
                className="btn btn-success btn-sm"
                onClick={onClickHandler}
            >Show
            </button>
        </div>
    </div>
)
}