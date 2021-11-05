import React from 'react';

const ProductList = ({products, chooseProduct}) => {


    return (
        <div className="list-group">
            {
                products.map((product) =>
                    <div
                        key={product.id}
                        className="list-group-item"
                        onClick={ ()=>{ chooseProduct(product.id) } }
                    >{product.title}</div>)
            }
        </div>
    )
}

export default ProductList;