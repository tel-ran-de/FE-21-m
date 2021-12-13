import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../store/actionCreators/product.actionCreator";
import ProductDetail from "../admin/Product/ProductDetail";
import {Link} from "react-router-dom";
import Spinner from "../ui/Spinner";

export default props => {

    const dispatch = useDispatch()
    const companies = useSelector(state => state.product.list)
    const isLoading = useSelector(state => state.ui.isLoading)

    useEffect( () => {
        dispatch(getAllProducts())
    }, [] )

    const renderProductList = () => {
        return isLoading ? <Spinner /> : !companies.length
            ? (<p className="alert alert-warning">No Products to show</p>)
            : companies.filter(c=>c.isActive === 1).map(c => <ProductDetail key={c.id} product={c} />)
    }

    return (
        <div className="row">
            <h2>Products</h2>
            <Link className="" to="/add-product">Add New Product</Link>
            {renderProductList()}
        </div>
    )
}