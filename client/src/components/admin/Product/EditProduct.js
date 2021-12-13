import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductById} from "../../../store/actionCreators/product.actionCreator";
import ProductForm from "./ProductForm";

export default props => {

    const {productId} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.product.activeProduct)

    useEffect(() => {
        dispatch(getProductById(productId))
    }, [])

    return product ?
        <ProductForm
            title="Edit"
            product={product}
            mode='edit'
        />
        : (<h2>No data for edit</h2>)
}