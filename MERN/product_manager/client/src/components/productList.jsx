import React from 'react';
import axios from 'axios';
import DeleteButton from './deleteButton';

const ProductList = props =>{

    const {products, setProducts} = props

    const deleteProduct = id=>{
        setProducts(products.filter(product => product._id!= id))
    }

    return (
        <div>
            <h2>All Products:</h2>
            {products.map((product, index) => <div key={index}>
                <a href={`/products/${product._id}`}>{product.title}</a>
                <DeleteButton id={product._id} callback={() => deleteProduct(product._id)}/>
            </div>)}
        </div>
    )


}


export default ProductList;