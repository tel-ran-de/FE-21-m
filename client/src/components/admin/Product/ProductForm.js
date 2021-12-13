import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addNewProduct, changeProduct, changeProductAction} from "../../../store/actionCreators/product.actionCreator";

export default props => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isAction = useSelector(state => state.product.isAction)
    const [formData, setFormData] = useState(props.product)

    const onChangeFieldHandler = e => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const onSubmitForm = e => {
        e.preventDefault()
        if (props.mode === 'edit') {
            dispatch(changeProduct(formData))
        } else if(props.mode === 'add') {
            dispatch(addNewProduct(formData))
        }
    }

    useEffect(()=>{
        if (isAction) {
            setTimeout(() => {
                dispatch(changeProductAction(false))
                navigate('/products')
            }, 1000)
        }
    },[isAction])

    return (
        <div className="row">
            <h2>{props.title} Product</h2>
            <form onSubmit={onSubmitForm}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Product Name</label>
                    <input type="text"
                           className="form-control"
                           name="name"
                           placeholder="Enter a Product Name"
                           value={formData.name}
                           onChange={onChangeFieldHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Product Image</label>
                    <input type="text"
                           className="form-control"
                           name="image"
                           placeholder="Enter a Product Image URL"
                           value={formData.image}
                           onChange={onChangeFieldHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Product Description</label>
                    <textarea
                        className="form-control"
                        name="description"
                        rows="3"
                        placeholder="Enter a Product Address"
                        value={formData.description}
                        onChange={onChangeFieldHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Product Price</label>
                    <input type="number"
                           className="form-control"
                           name="price"
                           placeholder="Enter a Product Price"
                           value={formData.price}
                           onChange={onChangeFieldHandler}
                    />
                </div>
                <button type="submit" className="btn btn-primary">{props.title} Product</button>
            </form>
        </div>
    )
}