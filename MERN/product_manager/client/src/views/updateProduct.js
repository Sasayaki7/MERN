import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import ProductForm from '../components/productForm';
import { navigate } from '@reach/router';
import ProductFormContext from '../context/productFormContext';


const UpdateProduct = props =>{

    const {formState, setFormState} = useContext(ProductFormContext);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res => {
            setFormState(res.data)
        })
        .catch(err=> console.log(err))
    }, [])

    const submissionFunction = (prod) =>{
        axios.put(`http://localhost:8000/api/products/${props.id}`, {...prod})
        .then(resp => {console.log(resp.data)
            navigate('/products') 
        })
        .catch(err=> console.log(err))
    }

    return (
        <>
            <ProductForm submissionFunction = {submissionFunction} />
        </>
    )
}

export default UpdateProduct;