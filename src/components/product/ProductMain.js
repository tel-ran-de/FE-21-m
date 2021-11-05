import React, {useEffect, useState} from 'react'
import ProductList from "./ProductList";
import ProductItem from "./ProductItem";

const ProductMain = () => {

    const [products, setProducts] = useState([]);
    const [activeProductId, setActiveProductId] = useState(null);
    const [productInfo, setProductInfo] = useState(null)

    /*

    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
     */

    useEffect(()=>{
        fetchProducts();
    }, []);

    useEffect(()=>{
        if ( !activeProductId ) {
            return;
        }
        fetchProductById();
    }, [activeProductId]);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            setProducts( await response.json() );
        } catch(err) {
            console.log(err.message);
        }
    }

    const fetchProductById = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/' + activeProductId);
            setProductInfo( await response.json() );
        } catch(err) {
            console.log(err.message);
        }
    }

    const changeActiveProductId = (productId) => {
        setActiveProductId(productId);
    }

    return (
        <div className="row">
            <div className="col">
                <ProductList products={products} chooseProduct={changeActiveProductId} />
            </div>
            <div className="col">
                <ProductItem product={productInfo} />
            </div>
        </div>
    )
}

export default ProductMain