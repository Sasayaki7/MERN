import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ProductDetail = props =>{

    const [product, setProduct] = useState({title: '', price: '', description: ''})
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(resp =>
            setProduct(resp.data.product))
        .catch(err=>console.log(err))
    })

    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}


export default ProductDetail;