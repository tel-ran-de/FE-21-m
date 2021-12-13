import React from 'react'
import ProductForm from "./ProductForm";

export default props => {

    return (<ProductForm
        mode="add"
        title="Add New"
        product={{
            name: '',
            image: 'https://nasijagaltangsel.websites.co.in/dummytemplate/img/product-placeholder.png',
            description: '',
            price: 0}}
    />)

}