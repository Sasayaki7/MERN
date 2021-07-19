import React from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { useState, useEffect } from 'react';
import DeleteButton from '../components/deleteButton';

const ProductDetail = props =>{
    const [product, setProduct] = useState({title: '', price: '', description: ''})
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(resp =>
            setProduct(resp.data))
        .catch(err=>console.log(err))
    }, [])

    const deleteProduct = id =>{
        navigate('/products')
    }
    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/products/${props.id}/edit`}>Edit</Link>
            <DeleteButton id={props.id} callback={() => deleteProduct(props.id)}/>
        </div>
    )
}


export default ProductDetail;