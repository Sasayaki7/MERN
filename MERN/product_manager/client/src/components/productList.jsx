import React from 'react';


const ProductList = props =>{

    const {products} = props.products


    return (
        <div>
            <h2>All Products:</h2>
            {products.map((product, index) => <div><a key={index} href={`/products/${product._id}`}>{product.title}</a></div>)}
        </div>
    )


}


export default ProductList;