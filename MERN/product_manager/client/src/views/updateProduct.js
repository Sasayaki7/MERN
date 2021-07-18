import React, {useState, useEffect} from 'react';
import axios from 'axios'
import ProductForm from '../components/productForm';

const UpdateProduct = props =>{

    const [product, setProduct] = useState({})
    const [ready, setReady] = useState(false)
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res => {
            setProduct(res.data)
            setReady(true)
        })
        .catch(err=> console.log(err))
    }, [])
    return (
        <>
            {ready?<ProductForm obj_id={props.id} product={product} /> :<ProductForm obj_id={props.id} />}
        </>
    )
}

export default UpdateProduct;