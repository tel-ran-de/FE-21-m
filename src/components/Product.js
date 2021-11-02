import React from 'react';

const Product = ({product, children}) => {
    return (
        <>
            {children}
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
        </>
    );
}

export default Product;