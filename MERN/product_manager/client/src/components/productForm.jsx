import React, {useContext, useState} from 'react';
import axios from 'axios';
import ProductFormContext from '../context/productFormContext';

const ProductForm = props =>{


    const {submissionFunction} = props;
    const {formState, setFormState} = useContext(ProductFormContext);
    const {price, title, description} = formState;
    const handleChange = e =>{
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        submissionFunction(formState);
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-row'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' onChange={handleChange} value={title}/>
                </div>
                <div className = 'input-row'>
                    <label htmlFor='price'>Price</label>
                    <input type='text' name='price' onChange={handleChange} value={price}/>
                </div>
                <div className='input-row'>
                    <label htmlFor='description'>Description</label>
                    <textarea name='description' rows='5' columns='60' onChange={handleChange} value={description}/>
                </div>
                <input type="submit" value={"Submit"}/>
            </form>
        </div>
    )

}


export default ProductForm;