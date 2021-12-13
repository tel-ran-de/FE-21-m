import React from 'react'
import {useDispatch} from "react-redux";
import {removeProduct} from "../../../store/actionCreators/product.actionCreator";
import {useNavigate} from "react-router-dom";

export default ({product}) => {

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const removeHandler = e => {
        e.preventDefault()
        dispatch(removeProduct(product.id))
    }

    const editHandler = e => {
        e.preventDefault()
        navigate('/edit-product/' + product.id)
    }

    return (
        <>
            <div className="col-2">
                <div className="text-center">
                    <img src={product.image} className="rounded img-responsive img-fluid" alt={product.name} />
                </div>
            </div>
            <div className="col-8">
                <h2>{product.name} (${product.price})</h2>
                <p><em>{product.description}</em></p>
            </div>
            <div className="col-2">
                <button
                    onClick={editHandler}
                    className="btn btn-primary btn-sm"
                >Edit</button>
                <button
                    onClick={removeHandler}
                    className="btn btn-danger btn-sm"
                >Remove</button>
            </div>
        </>
    )
}