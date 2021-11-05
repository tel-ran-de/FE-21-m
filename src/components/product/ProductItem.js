import React from 'react'

const ProductItem = ({product}) => {


    return !product
        ? (<div>Choose product in left side</div>)
        : (
            <div className="card">
                <img src={product.image} alt={product.title} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">${product.price}</p>
                </div>
            </div>
        )
}

export default ProductItem;