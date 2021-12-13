import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Dashboard from "../pages/Dashboard";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Companies from "../pages/Companies";
import AddCompany from "../admin/Company/AddCompany";
import EditCompany from "../admin/Company/EditCompany";
import Product from "../pages/Product";
import EditProduct from "../admin/Product/EditProduct";
import AddProduct from "../admin/Product/AddProduct";

export default props => {
    return (
        <>
        <Routes>
            <Route path="/" index element={<Dashboard/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/add-company" element={<AddCompany />} />
            <Route path="/edit-company/:companyId" element={<EditCompany />} />
            <Route path="/products" element={<Product />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/edit-product/:productId" element={<EditProduct />} />
        </Routes>
        </>
    )
}