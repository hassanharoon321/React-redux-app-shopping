import React, { useEffect } from 'react'
import axios from 'axios';
import { setProducts } from '../redux/actions/ProductAction'
import ProductComponent from './ProductComponent';
import { useDispatch } from 'react-redux';


const ProductListing = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
                console.log("error", err);
            })
            dispatch(setProducts(response.data))
        }
        fetchProducts()
    }, [])

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing
