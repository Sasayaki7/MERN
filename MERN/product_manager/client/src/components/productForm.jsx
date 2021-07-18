import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const ProductForm = props =>{

    const initialForm = {
        title: '',
        price: '',
        description: ''
    }
    const {product} = props;
    const [formState, setFormState] = useState(product? product: initialForm)
    const {price, title, description} = formState;
    const handleChange = e =>{
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    if(product&&formState.title === ''){
        setFormState(product)
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if (product){
            axios.put(`http://localhost:8000/api/products/${props.obj_id}`, {...formState})
            .then(resp => {console.log(resp.data)
                navigate('/products') 
            })
            .catch(err=> console.log(err))
        }
        else{
            axios.post('http://localhost:8000/api/products/new', {...formState})
            .then(resp => console.log(resp.data))
            .catch(err=> console.log(err))
            setFormState(initialForm)
        }
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
                <input type="submit" value={product? "Update" : "Create"}/>
            </form>
        </div>
    )

}


export default ProductForm;