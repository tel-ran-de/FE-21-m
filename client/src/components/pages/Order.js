import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../store/actionCreators/order.actionCreator";
import {Link} from "react-router-dom";
import Spinner from "../ui/Spinner";
import OrderDetail from "../admin/Order/OrderDetail";

export default props => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrders())
    }, [])

    const orders = useSelector(state => state.order.list)
    const isLoading = useSelector(state => state.ui.isLoading)

    const renderOrderList = () => {
        return isLoading ? <Spinner /> : !orders.length
            ? (<p className="alert alert-warning">No Orders to show</p>)
            : orders
                .map(order => <OrderDetail key={order.id} order={order} />)
    }

    return (
        <div className="row">
            <h2>Orders</h2>
            <Link className="" to="/add-order">Add New Order</Link>
            {renderOrderList()}
        </div>
    )
}