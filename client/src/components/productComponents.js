import React, { Component } from 'react';
import {Card} from '@material-ui/core';


const ProductCard = (props) => {
    let product = props.product;
    return(
        <Card>
            {product.name};
            {product.price};
            {product.layout};
        </Card>
    )
}

const ProductList = (props) => {
    let products = props.products;
    return(
        <div>
        {products.map((product)=>
            
            <ProductCard product={product}/>
            
        )}
        </div>
    )
}


export default ProductList;