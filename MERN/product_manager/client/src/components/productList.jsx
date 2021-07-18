import React from 'react';
import axios from 'axios';


const ProductList = props =>{

    const {products, setProducts} = props
    const handleClick = (e, id) =>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(response => {
            setProducts(products.filter(product => product._id !== id))
        })
        .catch(err=> console.log(err))
    }

    return (
        <div>
            <h2>All Products:</h2>
            {products.map((product, index) => <div key={index}>
                <a  href={`/products/${product._id}`}>{product.title}</a>
                <button onClick = {e=>handleClick(e, product._id)}>Delete</button>
            </div>)}
        </div>
    )


}


export default ProductList;