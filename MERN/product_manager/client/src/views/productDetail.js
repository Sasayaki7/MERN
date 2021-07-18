import React from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { useState, useEffect } from 'react';

const ProductDetail = props =>{
    const [product, setProduct] = useState({title: '', price: '', description: ''})
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(resp =>
            setProduct(resp.data))
        .catch(err=>console.log(err))
    }, [])

    const handleClick = e =>{
        axios.delete(`http://localhost:8000/api/products/${props.id}`)
        .then(resp => {
            console.log(resp)
            navigate('/products')
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/products/${props.id}/edit`}>Edit</Link>
            <button onClick = {handleClick}>Delete</button>
        </div>
    )
}


export default ProductDetail;