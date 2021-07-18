import React, {useState, useEffect} from 'react';
import axios from 'axios'
import ProductForm from '../components/productForm';
import ProductList from '../components/productList';

const Main = props =>{

    const [products, setProducts] = useState([])
    const [ready, setReady] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProducts(res.data)
            setReady(true)
        })
        .catch(err=> console.log(err))
    })
    return (
        <>
            <ProductForm/>
            {ready? <ProductList products = {products} setProducts={setProducts}/>:null}
        </>
    )
}

export default Main;