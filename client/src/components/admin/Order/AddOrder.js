import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllCompanies} from "../../../store/actionCreators/company.actionCreator";
import {changeProductAction, getAllProducts} from "../../../store/actionCreators/product.actionCreator";
import {addOrder} from "../../../store/actionCreators/order.actionCreator";
import {useNavigate} from "react-router-dom";

export default props => {

    const [order, setOrder] = useState({
        company_id: '',
        list: []
    })

    const [product, setProduct] = useState({
        id: Date.now(),
        product_id: '',
        quantity: '',
        name: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getAllCompanies())
        dispatch(getAllProducts())
    }, []);

    const companies = useSelector(state => state.company.list)
    const products = useSelector(state => state.product.list)
    const isAction = useSelector(state => state.order.isAction)

    useEffect(()=>{
        if (isAction) {
            setTimeout(() => {
                dispatch(changeProductAction(false))
                navigate('/orders')
            }, 1000)
        }
    },[isAction])

    const renderCompanyOptions = () => {
        return companies.map(company =>
            <option
                key={company.id}
                value={company.id}
            >{company.name}</option>)
    }

    const renderProductOptions = () => {
        return products
            .filter(p => p.isActive === 1)
            .map(product =>
            <option
                key={product.id}
                value={product.id}
            >{product.name}</option>)
    }

    const onSubmitHandler = e => {
        e.preventDefault()
        dispatch(addOrder(order))

    }

    const onCompanyIdChangeHandler = e => {
        setOrder({...order, company_id: e.target.value})
    }

    const renderOrderProducts = () => {
        return order.list.map(product =>
            <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => {
                            onRemoveHandler(product.id)
                        }}
                    >remove</button></td>
            </tr>
        )

    }

    const onRemoveHandler = productId => {
        setOrder({...order, list: order.list.filter(item => item.id !== productId)})
    }

    const onProductChange = e => {
        console.log(e.target.value)
        const name = products.find(p => p.id === +e.target.value).name
        console.log(name)
        setProduct({...product, product_id: e.target.value, name})
    }

    const onQuantityChange = e => {
        setProduct({...product, quantity: e.target.value})
    }

    const addProductHandler = e => {
        e.preventDefault()
        setOrder({...order, list: [...order.list, product]})
        setProduct({
            id: Date.now(),
            product_id: '',
            quantity: '',
            name: ''
        })
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="company">Company</label>
                <select
                    className="form-select mb-3"
                    name="company"
                    id="company"
                    value={order.company_id}
                    onChange={onCompanyIdChangeHandler}
                    defaultValue={null}
                >
                    <option selected>Open this select menu</option>
                    {renderCompanyOptions()}
                </select>
                <strong>Products List</strong>
                <table>
                    <thead>
                    <tr>
                        <th>Product name</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderOrderProducts()}
                    <tr>
                        <td>
                            <select
                                className="form-select"
                                name="product"
                                id="product"
                                value={product.id}
                                onChange={onProductChange}
                                defaultValue={null}
                            >
                                <option selected>Open this select menu</option>
                                {renderProductOptions()}
                            </select>
                        </td>
                        <td>
                            <input
                                className="form-control"
                                type="text"
                                name="quantity"
                                id="quantity"
                                value={product.quantity}
                                onChange={onQuantityChange}
                            />
                        </td>
                        <td>
                            <button className="btn btn-sm btn-primary" onClick={addProductHandler}>Add</button>
                        </td>
                    </tr>
                    </tbody>


                </table>

                <button className="btn btn-primary" type="submit">Add Order</button>
            </form>
        </div>
    )
}