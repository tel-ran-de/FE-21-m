import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOrderById} from "../../../store/actionCreators/order.actionCreator";

export default props => {
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrderById(id))
    }, []);

    const order = useSelector(state => state.order.activeOrder)

    const renderOrderInfo = () => {
        if (!order) {
            return (<h2>No info to show</h2>)
        }
        return (
            <div className="card">
                <h2 className="card-title">{order.company.name}</h2>
                <div className="card-body">
                    <h3>User: {order.user.username}</h3>
                    <strong>Product List:</strong>
                    <ul className="list-group">
                        {renderOrderProductList()}
                    </ul>
                </div>
            </div>
        )
    }

    const renderOrderProductList = () => {
        return order.productsList.map((product) => {
            return (
                <li key={product.id} className="list-group-item">
                    {product.product.name} - {product.product.price} * {product.quantity}
                </li>
            )
        })
    }

    return renderOrderInfo()
}