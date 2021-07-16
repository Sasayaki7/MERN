import React, {useState, useEffect} from 'react';

import axios from 'axios';

const ProductForm = props =>{

    const initialForm = {
        title: '',
        price: '',
        description: ''
    }
    const [formState, setFormState] = useState(initialForm)
    const {price, title, description} = formState;

    const handleChange = e =>{
        setFormState({...formState, [e.target.name]: e.target.value})
    }


    const handleSubmit = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/new', {...formState})
        .then(resp => console.log(resp.data))
        .catch(err=> console.log(err))
        setFormState(initialForm)
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
                <input type="submit" value="Create"/>
            </form>
        </div>
    )

}


export default ProductForm;