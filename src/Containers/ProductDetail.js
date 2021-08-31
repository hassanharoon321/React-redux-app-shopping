import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from "../redux/actions/ProductAction";

const ProductDetail = () => {
    const { productId } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchProductDetail = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
                console.log("err", err)
            })
            dispatch(selectedProduct(response.data))
        }
        if (productId && productId !== "") fetchProductDetail()
    }, [productId])

    const userSelectedProduct = useSelector((state) => state.productSelected)
    console.log(userSelectedProduct)


    return (
        <div className="ui grid container">
            <div className="ui placeholder segment"></div>
        </div>
    )
}

export default ProductDetail
