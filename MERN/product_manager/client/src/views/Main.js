import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import ProductForm from '../components/productForm';
import ProductList from '../components/productList';
import ProductFormContext from '../context/productFormContext';

const Main = props =>{

    const initialForm = {title: '', price: '', description: ''}
    const [products, setProducts] = useState([])
    const {formState, setFormState} = useContext(ProductFormContext);
    const [ready, setReady] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProducts(res.data)
            setReady(true)
        })
        .catch(err=> console.log(err))
    })
    
    const submissionFunction = (product, setState)=> {
        axios.post('http://localhost:8000/api/products/new', {...product})
        .then(resp => console.log(resp.data))
        .catch(err=> console.log(err))
        setFormState(initialForm)
    }
    return (
        <>
            <ProductForm initialState = {initialForm} submissionFunction={submissionFunction}/>
            {ready? <ProductList products = {products} setProducts={setProducts}/>:null}
        </>
    )
}

export default Main;